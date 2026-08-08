(function () {
  const configs = {
    "prototype-1-orbit-board": {
      id: "prototype-1-orbit-board",
      title: "All Websites",
      kicker: "Launch Board",
      subtitle: "A bright, moving directory for the little tools, dashboards, experiments, and family sites in Websites For Fun.",
      footer: "Prototype 1: Orbit Board. Promote with ./promote.sh prototype-1-orbit-board",
      settingsTitle: "Launch Board Settings",
      ambient: "lines",
      tilt: 0.5,
      defaultDensity: "cozy",
      defaultMotion: "full",
      themes: [
        { id: "orbit-sunrise", label: "Sunrise", swatch: "linear-gradient(135deg, #14b8a6, #f59e0b, #ef4444)" },
        { id: "orbit-ink", label: "Ink", swatch: "linear-gradient(135deg, #111827, #2563eb, #f97316)" },
        { id: "orbit-garden", label: "Garden", swatch: "linear-gradient(135deg, #0f766e, #84cc16, #facc15)" }
      ]
    },
    "prototype-2-sticker-wall": {
      id: "prototype-2-sticker-wall",
      title: "All Websites",
      kicker: "Sticker Wall",
      subtitle: "A scrapbook-ish launch page with taped cards, doodle energy, and quick filters for the projects you are playing with.",
      footer: "Prototype 2: Sticker Wall. Promote with ./promote.sh prototype-2-sticker-wall",
      settingsTitle: "Sticker Wall Settings",
      ambient: "lines",
      tilt: 1.9,
      defaultDensity: "cozy",
      defaultMotion: "soft",
      themes: [
        { id: "sticker-sorbet", label: "Sorbet", swatch: "linear-gradient(135deg, #fdf2f8, #bae6fd, #fde68a)" },
        { id: "sticker-graph", label: "Graph", swatch: "linear-gradient(135deg, #f8fafc, #cbd5e1, #38bdf8)" },
        { id: "sticker-party", label: "Party", swatch: "linear-gradient(135deg, #f97316, #ec4899, #22c55e)" }
      ]
    },
    "prototype-3-control-deck": {
      id: "prototype-3-control-deck",
      title: "All Websites",
      kicker: "Control Deck",
      subtitle: "A denser dashboard version for scanning all the live links, local builds, and utility projects without much ceremony.",
      footer: "Prototype 3: Control Deck. Promote with ./promote.sh prototype-3-control-deck",
      settingsTitle: "Control Deck Settings",
      ambient: "lines",
      tilt: 0,
      defaultDensity: "compact",
      defaultMotion: "soft",
      themes: [
        { id: "control-terminal", label: "Terminal", swatch: "linear-gradient(135deg, #07111f, #22d3ee, #a3e635)" },
        { id: "control-paper", label: "Paper", swatch: "linear-gradient(135deg, #f8fafc, #dbeafe, #0f766e)" },
        { id: "control-signal", label: "Signal", swatch: "linear-gradient(135deg, #18181b, #ef4444, #facc15)" }
      ]
    },
    "prototype-4-constellation": {
      id: "prototype-4-constellation",
      title: "All Websites",
      kicker: "Constellation",
      subtitle: "A star-map directory where every site feels like a luminous node in the same small universe.",
      footer: "Prototype 4: Constellation. Promote with ./promote.sh prototype-4-constellation",
      settingsTitle: "Constellation Settings",
      ambient: "stars",
      tilt: 0.3,
      defaultDensity: "cozy",
      defaultMotion: "full",
      themes: [
        { id: "constellation-deep", label: "Deep", swatch: "linear-gradient(135deg, #040617, #312e81, #22d3ee)" },
        { id: "constellation-dawn", label: "Dawn", swatch: "linear-gradient(135deg, #1e1b4b, #f97316, #fef3c7)" },
        { id: "constellation-aurora", label: "Aurora", swatch: "linear-gradient(135deg, #082f49, #10b981, #a78bfa)" }
      ]
    },
    "prototype-5-arcade-grid": {
      id: "prototype-5-arcade-grid",
      title: "All Websites",
      kicker: "Arcade Grid",
      subtitle: "Chunkier cards, louder colors, scanline motion, and a playful cabinet-board feel for tapping around on phones and iPads.",
      footer: "Prototype 5: Arcade Grid. Promote with ./promote.sh prototype-5-arcade-grid",
      settingsTitle: "Arcade Grid Settings",
      ambient: "arcade",
      tilt: 0.8,
      defaultDensity: "cozy",
      defaultMotion: "full",
      themes: [
        { id: "arcade-cabinet", label: "Cabinet", swatch: "linear-gradient(135deg, #111827, #facc15, #ef4444)" },
        { id: "arcade-day", label: "Day", swatch: "linear-gradient(135deg, #fefce8, #38bdf8, #f97316)" },
        { id: "arcade-neon", label: "Neon", swatch: "linear-gradient(135deg, #020617, #22d3ee, #ec4899)" }
      ]
    }
  };

  window.AllWebsitePrototypeConfigs = configs;
  window.getAllWebsitePrototypeConfig = function (id) {
    return configs[id] || configs["prototype-1-orbit-board"];
  };
})();
