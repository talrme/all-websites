(function () {
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getProjectById(id) {
    return window.WebsiteAtlas.projects.find((project) => project.id === id);
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function loadSettings(key, defaults) {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      return { ...defaults, ...saved };
    } catch (error) {
      return { ...defaults };
    }
  }

  function saveSettings(key, settings) {
    try {
      localStorage.setItem(key, JSON.stringify(settings));
    } catch (error) {
      // Device-local preferences are nice to have, but the page should keep working if storage is unavailable.
    }
  }

  function boot(config) {
    const root = document.getElementById("app");
    if (!root || !window.WebsiteAtlas) return;
    document.title = config.title ? `${config.title} - ${config.kicker || "Prototype"}` : document.title;

    const defaults = {
      theme: config.themes[0].id,
      density: config.defaultDensity || "cozy",
      motion: config.defaultMotion || "full",
      showDetails: true,
      showSource: true,
      sort: "curated",
      openMode: "same",
      groupBy: false,
      ...(config.defaultSettings || {})
    };

    const storageKey = config.storageKey || `all-websites:${config.id}`;
    let settings = loadSettings(storageKey, defaults);
    let activeCategory = "All";
    let query = "";
    let shuffledIds = null;
    let stopAmbient = null;

    const categories = ["All", ...window.WebsiteAtlas.categories];

    function applySettings() {
      document.documentElement.dataset.theme = settings.theme;
      document.documentElement.dataset.density = settings.density;
      document.documentElement.dataset.motion = settings.motion;
      document.documentElement.dataset.details = String(Boolean(settings.showDetails));
      document.documentElement.dataset.source = String(Boolean(settings.showSource));
      document.body.dataset.prototype = config.id;
    }

    function renderShell() {
      root.innerHTML = `
        ${config.ambient ? '<canvas id="ambient-canvas" class="ambient-canvas" aria-hidden="true"></canvas>' : ""}
        <div class="app-shell ${escapeHtml(config.shellClass || "")}">
          <header class="site-header">
            <div>
              <p class="kicker">${escapeHtml(config.kicker || "Websites For Fun")}</p>
              <h1 class="site-title">${escapeHtml(config.title || "All Websites")}</h1>
              <p class="site-subtitle">${escapeHtml(config.subtitle || "A launch page for the websites in this folder.")}</p>
            </div>
            <div class="header-actions">
              ${config.showShuffle === false ? "" : '<button class="action-button" id="shuffle-btn" type="button">Shuffle</button>'}
              <button class="action-button" id="settings-btn" type="button">Settings</button>
            </div>
          </header>

          <section class="toolbar" aria-label="Website filters">
            <label class="search-field">
              <span>Search</span>
              <input id="search-input" type="search" autocomplete="off" spellcheck="false" placeholder="Site name">
            </label>
            <div class="category-strip" id="category-strip" role="list">
              ${categories.map((category) => `
                <button class="chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === activeCategory ? "true" : "false"}">${escapeHtml(category)}</button>
              `).join("")}
            </div>
            <p class="count-line" id="count-line"></p>
          </section>

          <main class="project-grid ${escapeHtml(config.gridClass || "")}" id="project-grid"></main>
          <footer class="site-footer">${escapeHtml(config.footer || "Prototype landing page for the Websites For Fun folder.")}</footer>
        </div>

        <div class="settings-backdrop" id="settings-modal" hidden>
          <section class="settings-panel" role="dialog" aria-modal="true" aria-labelledby="settings-title">
            <header class="settings-header">
              <h2 id="settings-title">${escapeHtml(config.settingsTitle || "Settings")}</h2>
              <button class="settings-close" id="settings-close" type="button">Close</button>
            </header>
            <div class="settings-body">
              <fieldset class="settings-field">
                <legend>Theme</legend>
                <div class="swatch-grid">
                  ${config.themes.map((theme) => `
                    <button class="swatch-button" type="button" data-theme-option="${escapeHtml(theme.id)}" aria-pressed="false">
                      <span class="swatch-preview" style="background: ${escapeHtml(theme.swatch)}"></span>
                      <span>${escapeHtml(theme.label)}</span>
                    </button>
                  `).join("")}
                </div>
              </fieldset>

              <fieldset class="settings-field">
                <legend>Motion</legend>
                <div class="segmented">
                  <button type="button" data-setting="motion" data-value="still">Still</button>
                  <button type="button" data-setting="motion" data-value="soft">Soft</button>
                  <button type="button" data-setting="motion" data-value="full">Full</button>
                </div>
              </fieldset>

              <fieldset class="settings-field">
                <legend>Tile Size</legend>
                <div class="segmented">
                  <button type="button" data-setting="density" data-value="compact">Compact</button>
                  <button type="button" data-setting="density" data-value="cozy">Cozy</button>
                  <button type="button" data-setting="density" data-value="big">Big</button>
                </div>
              </fieldset>

              <fieldset class="settings-field">
                <legend>Sort</legend>
                <div class="segmented">
                  <button type="button" data-setting="sort" data-value="curated">Curated</button>
                  <button type="button" data-setting="sort" data-value="alpha">A-Z</button>
                  <button type="button" data-setting="sort" data-value="category">Category</button>
                </div>
              </fieldset>

              <fieldset class="settings-field settings-field--two">
                <legend>Links</legend>
                <div class="segmented segmented--two">
                  <button type="button" data-setting="openMode" data-value="same">Same Tab</button>
                  <button type="button" data-setting="openMode" data-value="new">New Tab</button>
                </div>
              </fieldset>

              <div class="settings-toggles">
                <label class="toggle-row">
                  <span>Descriptions</span>
                  <input type="checkbox" data-setting-bool="showDetails">
                  <span class="toggle-switch"></span>
                </label>
                <label class="toggle-row">
                  <span>Source Labels</span>
                  <input type="checkbox" data-setting-bool="showSource">
                  <span class="toggle-switch"></span>
                </label>
                <label class="toggle-row">
                  <span>Group Headings</span>
                  <input type="checkbox" data-setting-bool="groupBy">
                  <span class="toggle-switch"></span>
                </label>
              </div>

              <div class="settings-footer-actions">
                <button class="reset-button" id="reset-settings" type="button">Reset</button>
                <button class="action-button" id="settings-done" type="button">Done</button>
              </div>
            </div>
          </section>
        </div>
      `;

      if (config.ambient) {
        const canvas = document.getElementById("ambient-canvas");
        stopAmbient = window.WebsiteAtlas.startAmbient(canvas, config.ambient, () => settings.motion);
      }
    }

    function orderedProjects(projects) {
      const list = projects.slice();
      if (settings.sort === "alpha") {
        return list.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (settings.sort === "category") {
        return list.sort((a, b) => (a.category + a.name).localeCompare(b.category + b.name));
      }
      if (shuffledIds) {
        const rank = new Map(shuffledIds.map((id, index) => [id, index]));
        return list.sort((a, b) => (rank.get(a.id) || 0) - (rank.get(b.id) || 0));
      }
      return list;
    }

    function visibleProjects() {
      const lower = query.trim().toLowerCase();
      return orderedProjects(window.WebsiteAtlas.projects.filter((project) => {
        const inCategory = activeCategory === "All" || project.category === activeCategory;
        const inSearch = !lower || [project.name, project.description, project.category].join(" ").toLowerCase().includes(lower);
        return inCategory && inSearch;
      }));
    }

    function cardMarkup(project, index) {
      const target = settings.openMode === "new" ? ' target="_blank" rel="noreferrer"' : "";
      const tilt = ((index % 7) - 3) * (config.tilt || 0.6);
      const delay = `${(index % 8) * -0.36}s`;
      return `
        <a class="project-card" href="${escapeHtml(project.url)}"${target} data-project-id="${escapeHtml(project.id)}" style="--accent: ${escapeHtml(project.accent)}; --i: ${index}; --tilt: ${tilt}deg; --delay: ${delay};">
          <div class="project-card__art">
            <canvas aria-hidden="true"></canvas>
            <span class="project-card__source">${escapeHtml(project.source)}</span>
          </div>
          <span class="project-card__category">${escapeHtml(project.category)}</span>
          <h2 class="project-card__title">${escapeHtml(project.name)}</h2>
          <p class="project-card__description">${escapeHtml(project.description)}</p>
        </a>
      `;
    }

    function renderCards() {
      const grid = document.getElementById("project-grid");
      const countLine = document.getElementById("count-line");
      const projects = visibleProjects();

      countLine.textContent = `${projects.length} of ${window.WebsiteAtlas.projects.length}`;

      if (!projects.length) {
        grid.innerHTML = '<div class="empty-state">No matching sites.</div>';
        return;
      }

      let lastCategory = "";
      let html = "";
      projects.forEach((project, index) => {
        if ((settings.groupBy || settings.sort === "category") && project.category !== lastCategory) {
          lastCategory = project.category;
          html += `<h2 class="group-heading">${escapeHtml(project.category)}</h2>`;
        }
        html += cardMarkup(project, index);
      });
      grid.innerHTML = html;

      window.requestAnimationFrame(() => {
        grid.querySelectorAll(".project-card").forEach((card) => {
          const project = getProjectById(card.dataset.projectId);
          const canvas = card.querySelector("canvas");
          if (project && canvas) {
            window.WebsiteAtlas.drawProjectArt(canvas, project, config.id);
          }
        });
      });
    }

    function updateCategoryButtons() {
      document.querySelectorAll("[data-category]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory));
      });
    }

    function updateSettingControls() {
      document.querySelectorAll("[data-theme-option]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.themeOption === settings.theme));
      });
      document.querySelectorAll("[data-setting]").forEach((button) => {
        button.setAttribute("aria-pressed", String(String(settings[button.dataset.setting]) === button.dataset.value));
      });
      document.querySelectorAll("[data-setting-bool]").forEach((input) => {
        input.checked = Boolean(settings[input.dataset.settingBool]);
      });
    }

    function persistAndRender() {
      applySettings();
      saveSettings(storageKey, settings);
      updateSettingControls();
      renderCards();
    }

    function openSettings() {
      const modal = document.getElementById("settings-modal");
      modal.hidden = false;
      updateSettingControls();
      document.getElementById("settings-close").focus();
    }

    function closeSettings() {
      document.getElementById("settings-modal").hidden = true;
      document.getElementById("settings-btn").focus();
    }

    function bindEvents() {
      document.getElementById("settings-btn").addEventListener("click", openSettings);
      document.getElementById("settings-close").addEventListener("click", closeSettings);
      document.getElementById("settings-done").addEventListener("click", closeSettings);
      document.getElementById("settings-modal").addEventListener("click", (event) => {
        if (event.target.id === "settings-modal") closeSettings();
      });

      const search = document.getElementById("search-input");
      search.addEventListener("input", (event) => {
        query = event.target.value;
        renderCards();
      });

      document.getElementById("category-strip").addEventListener("click", (event) => {
        const button = event.target.closest("[data-category]");
        if (!button) return;
        activeCategory = button.dataset.category;
        updateCategoryButtons();
        renderCards();
      });

      const shuffleButton = document.getElementById("shuffle-btn");
      if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
          shuffledIds = shuffle(window.WebsiteAtlas.projects.map((project) => project.id));
          settings.sort = "curated";
          persistAndRender();
        });
      }

      document.getElementById("settings-modal").addEventListener("click", (event) => {
        const theme = event.target.closest("[data-theme-option]");
        if (theme) {
          settings.theme = theme.dataset.themeOption;
          persistAndRender();
          return;
        }

        const segmented = event.target.closest("[data-setting]");
        if (segmented) {
          settings[segmented.dataset.setting] = segmented.dataset.value;
          persistAndRender();
        }
      });

      document.getElementById("settings-modal").addEventListener("change", (event) => {
        const input = event.target.closest("[data-setting-bool]");
        if (!input) return;
        settings[input.dataset.settingBool] = input.checked;
        persistAndRender();
      });

      document.getElementById("reset-settings").addEventListener("click", () => {
        settings = { ...defaults };
        shuffledIds = null;
        persistAndRender();
      });

      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !document.getElementById("settings-modal").hidden) {
          closeSettings();
        }
      });

      window.addEventListener("resize", () => {
        document.querySelectorAll(".project-card").forEach((card) => {
          const project = getProjectById(card.dataset.projectId);
          const canvas = card.querySelector("canvas");
          if (project && canvas) {
            window.WebsiteAtlas.drawProjectArt(canvas, project, config.id);
          }
        });
      });
    }

    applySettings();
    renderShell();
    bindEvents();
    updateCategoryButtons();
    updateSettingControls();
    renderCards();

    window.addEventListener("pagehide", () => {
      if (stopAmbient) stopAmbient();
    });
  }

  window.WebsiteLanding = { boot };
})();
