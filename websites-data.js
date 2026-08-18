(function () {
  const projects = [
    {
      id: "music",
      name: "Music",
      short: "MUS",
      category: "Music",
      description: "A mobile-first player for your tracks, queues, lyrics, themes, and shareable mixes.",
      url: "https://talrme.github.io/music",
      source: "Live",
      visual: "music",
      accent: "#14b8a6"
    },
    {
      id: "pink-pony-club-medley",
      name: "Pink Pony Club Medley",
      short: "PPC",
      category: "Music",
      description: "A chord and lyric medley viewer with auto-scroll, progression switching, and URL-saved settings.",
      url: "https://talrme.github.io/pink-pony-club-medley/",
      source: "Live",
      visual: "music",
      accent: "#ec4899"
    },
    {
      id: "world-cup-2026",
      name: "World Cup 2026",
      short: "WC",
      category: "Data",
      description: "A spoiler-conscious schedule dashboard with highlights, groups, players, venues, and match details.",
      url: "https://talrme.github.io/world-cup-2026/",
      source: "Live",
      visual: "score",
      accent: "#22c55e"
    },
    {
      id: "sophie-buses",
      name: "Sophie's Buses",
      short: "BUS",
      category: "Transit",
      description: "A real-time AC Transit tracker with leave-by times, route setup, and live predictions.",
      url: "https://talrme.github.io/sophies-buses/",
      source: "Live",
      visual: "bus",
      accent: "#0ea5e9"
    },
    {
      id: "metric-clock",
      name: "Metric Clock",
      short: "10H",
      category: "Time",
      description: "A decimal-time clock playground with many clock faces, smooth motion, and persistent settings.",
      url: "https://talrme.github.io/metric-clock",
      source: "Live",
      visual: "clock",
      accent: "#8b5cf6"
    },
    {
      id: "invisible-journal",
      name: "Invisible Journal",
      short: "INK",
      category: "Writing",
      description: "A private stream-of-consciousness space where text fades, scatters, drops, or dissolves as you type.",
      url: "https://talrme.github.io/invisible-journal/",
      source: "Live",
      visual: "journal",
      accent: "#6366f1"
    },
    {
      id: "paths-to-peace",
      name: "Paths to Peace",
      short: "PEA",
      category: "Wellness",
      description: "A phone-first collection of tiny meditative practices with shuffled favorites, image-backed cards, and a grouped list.",
      url: "https://talrme.github.io/paths-to-peace/",
      source: "Live",
      visual: "journal",
      accent: "#2f855a"
    },
    {
      id: "miris-mix-and-match",
      name: "Miri's Mix & Match",
      short: "MIX",
      category: "Play",
      description: "A sticker scene builder with backgrounds, doodles, text, layers, undo, and shareable scenes.",
      url: "https://talrme.github.io/mix-and-match",
      source: "Live",
      visual: "play",
      accent: "#f97316"
    },
    {
      id: "best-tv",
      name: "Best TV Shows",
      short: "TV",
      category: "Data",
      description: "Interactive episode-rating heatmaps with searchable shows, thresholds, tables, and IMDb links.",
      url: "https://talrme.github.io/best-tv/",
      source: "Live",
      visual: "heatmap",
      accent: "#f59e0b"
    },
    {
      id: "due-date",
      name: "Due Date",
      short: "DUE",
      category: "Data",
      description: "An interactive due-date probability chart with first-baby and second-plus birth timing curves.",
      url: "https://talrme.github.io/due-date/",
      source: "Live",
      visual: "data",
      accent: "#2a9d8f"
    },
    {
      id: "earthquakes",
      name: "Recent Quakes",
      short: "EQ",
      category: "Map",
      description: "A live earthquake map with filters, stats, a focusable list, and USGS-backed recent activity.",
      url: "https://talrme.github.io/recent-quakes/",
      source: "Live",
      visual: "map",
      accent: "#ef4444"
    },
    {
      id: "pooch",
      name: "Pooch Scoreboard",
      short: "PCH",
      category: "Games",
      description: "A mobile-first score tracker for Pooch with bids, tricks, penalties, and round structure.",
      url: "https://talrme.github.io/pooch",
      source: "Live",
      visual: "cards",
      accent: "#16a34a"
    },
    {
      id: "babysitter-club",
      name: "Babysitter Club",
      short: "BSC",
      category: "Family",
      description: "A Firebase-backed coordination app for requests, babysits, households, clubs, and invites.",
      url: "https://talrme.github.io/babysitter-club",
      source: "Live",
      visual: "family",
      accent: "#f43f5e"
    },
    {
      id: "levis-bar-mitzvah-donations",
      name: "Levi's Bar Mitzvah Donations",
      short: "LEV",
      category: "Family",
      description: "A photo-rich Bar Mitzvah giving site with five design directions, donation choices, and a form for splitting the $500 gift.",
      url: "https://talrme.github.io/levis-bar-mitzvah-donations/",
      source: "Live",
      visual: "family",
      accent: "#0f766e"
    },
    {
      id: "census-births",
      name: "Census Births",
      short: "CEN",
      category: "Data",
      description: "Tract-level census and birth-proxy data for Dallas, Oakland, and Spartanburg.",
      url: "https://talrme.github.io/census-births",
      source: "Live",
      visual: "data",
      accent: "#06b6d4"
    },
    {
      id: "scavenger-hunt-2026",
      name: "Scavenger Hunt 2026",
      short: "HNT",
      category: "Play",
      description: "A team scavenger-hunt site with location cards, photo-friendly content, and mobile layouts.",
      url: "http://av-ste.gitlab-master-pages.nvidia.com/scavenger-hunt-2026/",
      source: "Live",
      visual: "map",
      accent: "#a855f7"
    },
    {
      id: "test-explorer",
      name: "Test Explorer",
      short: "TST",
      category: "Play",
      description: "A compact interactive hello-world site with gradients, motion, and click-driven messages.",
      url: "http://av-ste.gitlab-master-pages.nvidia.com/test-explorer/",
      source: "Live",
      visual: "play",
      accent: "#7c3aed"
    },
    {
      id: "baby-data",
      name: "Baby Milestones",
      short: "BAB",
      category: "Family",
      description: "A milestone tracker for early development with age filtering, categories, birthday dates, and CDC links.",
      url: "https://talrme.github.io/baby-data/",
      source: "Live",
      visual: "family",
      accent: "#fb7185"
    },
    {
      id: "scoreboard",
      name: "Scoreboard",
      short: "SCR",
      category: "Games",
      description: "A flexible scoreboard for custom games, Pooch, and Cribbage with themes and saved state.",
      url: "../../scoreboard/",
      source: "Local",
      visual: "score",
      accent: "#3b82f6"
    },
    {
      id: "group-trip",
      name: "Group Trip",
      short: "TRP",
      category: "Travel",
      description: "A mobile arrivals and departures board with several style variants and Google Sheets wiring.",
      url: "../../group-trip/staging_1/",
      source: "Local",
      visual: "trip",
      accent: "#10b981"
    },
    {
      id: "transit-eta",
      name: "Transit ETA",
      short: "ETA",
      category: "Transit",
      description: "A local transit arrival board with route tiles, live indicators, and map-ready dependencies.",
      url: "../../transit-eta/",
      source: "Local",
      visual: "bus",
      accent: "#2563eb"
    },
    {
      id: "visualizations",
      name: "Visualizations",
      short: "VIS",
      category: "Experiments",
      description: "A gentle p5 interaction space with ripples, particles, trails, color schemes, and ambient motion.",
      url: "../../visualizations/",
      source: "Local",
      visual: "play",
      accent: "#38bdf8"
    },
    {
      id: "tracking",
      name: "Tracking",
      short: "TRK",
      category: "Experiments",
      description: "A small typing-effect page with visit counters, browser signals, and animated text.",
      url: "../../tracking/",
      source: "Local",
      visual: "journal",
      accent: "#64748b"
    },
    {
      id: "firebase-setup",
      name: "Firebase Setup",
      short: "FIR",
      category: "Tools",
      description: "A quick guide for Firebase Auth and GitHub Pages setup for the babysitter app.",
      url: "../../firebase-setup/",
      source: "Local",
      visual: "data",
      accent: "#f97316"
    }
  ];

  const categories = Array.from(new Set(projects.map((project) => project.category))).sort();

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function hexToRgb(hex) {
    const clean = String(hex || "#64748b").replace("#", "");
    const value = clean.length === 3
      ? clean.split("").map((char) => char + char).join("")
      : clean.padEnd(6, "0").slice(0, 6);
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16)
    ];
  }

  function mix(hexA, hexB, amount) {
    const a = hexToRgb(hexA);
    const b = hexToRgb(hexB);
    const t = clamp(amount, 0, 1);
    return `rgb(${Math.round(a[0] * (1 - t) + b[0] * t)}, ${Math.round(a[1] * (1 - t) + b[1] * t)}, ${Math.round(a[2] * (1 - t) + b[2] * t)})`;
  }

  function rgba(hex, alpha) {
    const rgb = hexToRgb(hex);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  }

  function roundedRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function fitCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(220, rect.width || 320);
    const height = Math.max(120, rect.height || 180);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width, height };
  }

  function drawBackground(ctx, width, height, accent, variant) {
    const dark = variant === "constellation" || variant === "arcade" || variant === "control";
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, dark ? mix(accent, "#050816", 0.76) : mix(accent, "#fff8e7", 0.78));
    gradient.addColorStop(0.55, dark ? mix(accent, "#182033", 0.58) : mix(accent, "#dff7f1", 0.68));
    gradient.addColorStop(1, dark ? mix(accent, "#08111f", 0.42) : mix(accent, "#fff1f2", 0.74));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.globalAlpha = dark ? 0.18 : 0.24;
    ctx.strokeStyle = dark ? "#ffffff" : "#111827";
    ctx.lineWidth = 1;
    for (let x = -height; x < width + height; x += 34) {
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x + height, 0);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawLabel(ctx, width, height, project, accent) {
    const label = project.short || project.name.slice(0, 3).toUpperCase();
    roundedRect(ctx, 14, height - 48, 78, 32, 8);
    ctx.fillStyle = rgba("#000000", 0.36);
    ctx.fill();
    ctx.strokeStyle = rgba(accent, 0.9);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 14px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 28, height - 32);
  }

  function drawBars(ctx, width, height, accent) {
    const baseY = height - 52;
    for (let i = 0; i < 15; i += 1) {
      const h = 22 + ((i * 23) % 62);
      const x = width - 144 + i * 8;
      roundedRect(ctx, x, baseY - h, 4, h, 2);
      ctx.fillStyle = i % 3 === 0 ? "#ffffff" : rgba(accent, 0.9);
      ctx.fill();
    }
  }

  function drawProjectArt(canvas, project, variant) {
    const { ctx, width, height } = fitCanvas(canvas);
    const accent = project.accent || "#64748b";
    ctx.clearRect(0, 0, width, height);
    drawBackground(ctx, width, height, accent, variant);

    ctx.save();
    ctx.translate(width / 2, height / 2);

    switch (project.visual) {
      case "music": {
        ctx.fillStyle = rgba("#000000", 0.45);
        ctx.beginPath();
        ctx.arc(-34, 0, Math.min(width, height) * 0.28, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = rgba("#ffffff", 0.7);
        ctx.lineWidth = 3;
        for (let r = 20; r < Math.min(width, height) * 0.28; r += 18) {
          ctx.beginPath();
          ctx.arc(-34, 0, r, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(-34, 0, 17, 0, Math.PI * 2);
        ctx.fill();
        drawBars(ctx, width, height, accent);
        break;
      }
      case "clock": {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(0, 0, Math.min(width, height) * 0.3, -Math.PI / 2, Math.PI * 1.45);
        ctx.stroke();
        ctx.strokeStyle = rgba(accent, 0.9);
        ctx.lineWidth = 16;
        ctx.beginPath();
        ctx.arc(0, 0, Math.min(width, height) * 0.2, -Math.PI / 2, Math.PI * 0.85);
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 34px system-ui, -apple-system, Segoe UI, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("10:42", 0, 4);
        break;
      }
      case "heatmap": {
        const cell = Math.min(22, width / 17);
        const startX = -cell * 6;
        const startY = -cell * 3.2;
        const colors = [accent, "#22c55e", "#facc15", "#ef4444"];
        for (let row = 0; row < 7; row += 1) {
          for (let col = 0; col < 12; col += 1) {
            roundedRect(ctx, startX + col * cell, startY + row * cell, cell - 4, cell - 4, 4);
            ctx.fillStyle = colors[(row + col) % colors.length];
            ctx.globalAlpha = 0.72 + ((row * col) % 3) * 0.08;
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
        break;
      }
      case "map": {
        ctx.strokeStyle = rgba("#ffffff", 0.72);
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-width * 0.28, height * 0.18);
        ctx.bezierCurveTo(-width * 0.14, -height * 0.2, width * 0.08, height * 0.18, width * 0.25, -height * 0.14);
        ctx.stroke();
        for (let i = 0; i < 6; i += 1) {
          const x = -width * 0.28 + i * width * 0.11;
          const y = Math.sin(i * 1.2) * height * 0.16;
          ctx.fillStyle = i % 2 ? "#ffffff" : accent;
          ctx.beginPath();
          ctx.arc(x, y, i % 2 ? 7 : 10, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case "bus":
      case "trip": {
        ctx.strokeStyle = rgba("#ffffff", 0.78);
        ctx.lineWidth = 5;
        ctx.setLineDash([12, 12]);
        ctx.beginPath();
        ctx.moveTo(-width * 0.35, -height * 0.15);
        ctx.lineTo(width * 0.35, -height * 0.15);
        ctx.moveTo(-width * 0.25, height * 0.16);
        ctx.lineTo(width * 0.32, height * 0.16);
        ctx.stroke();
        ctx.setLineDash([]);
        for (let i = 0; i < 3; i += 1) {
          const x = -width * 0.22 + i * width * 0.2;
          roundedRect(ctx, x, -22 + i * 14, 70, 34, 8);
          ctx.fillStyle = i % 2 ? "#ffffff" : accent;
          ctx.fill();
          ctx.fillStyle = i % 2 ? accent : "#ffffff";
          ctx.fillRect(x + 12, -14 + i * 14, 18, 8);
          ctx.fillRect(x + 36, -14 + i * 14, 18, 8);
        }
        break;
      }
      case "journal": {
        ctx.fillStyle = rgba("#ffffff", 0.88);
        roundedRect(ctx, -width * 0.28, -height * 0.26, width * 0.56, height * 0.5, 8);
        ctx.fill();
        for (let i = 0; i < 6; i += 1) {
          ctx.fillStyle = i < 3 ? rgba(accent, 0.8 - i * 0.14) : rgba("#111827", 0.18);
          roundedRect(ctx, -width * 0.2, -height * 0.16 + i * 18, width * (0.34 - i * 0.018), 6, 4);
          ctx.fill();
        }
        break;
      }
      case "cards":
      case "score": {
        for (let i = 0; i < 4; i += 1) {
          ctx.save();
          ctx.rotate((-10 + i * 6) * Math.PI / 180);
          roundedRect(ctx, -96 + i * 38, -54 + i * 4, 70, 94, 8);
          ctx.fillStyle = i % 2 ? "#ffffff" : rgba(accent, 0.92);
          ctx.fill();
          ctx.fillStyle = i % 2 ? accent : "#ffffff";
          ctx.font = "800 24px system-ui, -apple-system, Segoe UI, sans-serif";
          ctx.fillText(String((i + 2) * 5), -74 + i * 38, -12 + i * 4);
          ctx.restore();
        }
        break;
      }
      case "family": {
        const spots = [[-60, -10, 24], [-18, -24, 18], [26, -8, 22], [64, 12, 16], [-8, 34, 15]];
        spots.forEach(([x, y, r], index) => {
          ctx.fillStyle = index % 2 ? "#ffffff" : accent;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = rgba("#000000", 0.18);
          ctx.beginPath();
          ctx.arc(x, y + r * 1.25, r * 1.15, Math.PI, 0);
          ctx.fill();
        });
        break;
      }
      case "play": {
        for (let i = 0; i < 9; i += 1) {
          ctx.save();
          ctx.translate(-width * 0.26 + (i % 3) * width * 0.18, -height * 0.18 + Math.floor(i / 3) * height * 0.17);
          ctx.rotate(((i * 17) % 25 - 12) * Math.PI / 180);
          roundedRect(ctx, -24, -18, 48, 36, 7);
          ctx.fillStyle = [accent, "#facc15", "#38bdf8", "#fb7185"][i % 4];
          ctx.fill();
          ctx.restore();
        }
        break;
      }
      case "data":
      default: {
        for (let i = 0; i < 7; i += 1) {
          const h = 28 + ((i * 31) % 78);
          roundedRect(ctx, -width * 0.28 + i * 24, height * 0.24 - h, 15, h, 5);
          ctx.fillStyle = i % 2 ? "#ffffff" : accent;
          ctx.fill();
        }
        ctx.strokeStyle = rgba("#ffffff", 0.75);
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-width * 0.3, height * 0.08);
        for (let i = 0; i < 7; i += 1) {
          ctx.lineTo(-width * 0.26 + i * 36, Math.sin(i * 1.4) * height * 0.18);
        }
        ctx.stroke();
      }
    }

    ctx.restore();
    drawLabel(ctx, width, height, project, accent);
  }

  function startAmbient(canvas, variant, getMotion) {
    if (!canvas) return function noop() {};
    const ctx = canvas.getContext("2d");
    const dots = Array.from({ length: 80 }, (_, index) => ({
      x: (index * 37) % 100,
      y: (index * 61) % 100,
      r: 0.8 + (index % 5) * 0.35,
      s: 0.3 + (index % 7) * 0.08
    }));
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time) {
      const motion = getMotion();
      const speed = motion === "full" ? 1 : motion === "soft" ? 0.35 : 0;
      ctx.clearRect(0, 0, width, height);

      if (variant === "stars") {
        ctx.fillStyle = "rgba(255,255,255,0.72)";
        dots.forEach((dot, index) => {
          const x = (dot.x / 100) * width + Math.sin(time * 0.00025 * dot.s + index) * 12 * speed;
          const y = (dot.y / 100) * height + Math.cos(time * 0.0002 * dot.s + index) * 10 * speed;
          ctx.globalAlpha = 0.35 + ((index % 6) * 0.08);
          ctx.beginPath();
          ctx.arc(x, y, dot.r, 0, Math.PI * 2);
          ctx.fill();
          if (index % 9 === 0) {
            ctx.globalAlpha = 0.12;
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 90, y + Math.sin(index) * 35);
            ctx.stroke();
          }
        });
        ctx.globalAlpha = 1;
      } else if (variant === "arcade") {
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        for (let y = ((time * 0.018 * speed) % 18); y < height; y += 18) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(255, 214, 102, 0.08)";
        for (let x = -80 + ((time * 0.04 * speed) % 160); x < width + 80; x += 160) {
          ctx.fillRect(x, 0, 42, height);
        }
      } else {
        ctx.strokeStyle = "rgba(255,255,255,0.13)";
        for (let i = 0; i < 12; i += 1) {
          const x = (i / 12) * width + Math.sin(time * 0.0003 + i) * 18 * speed;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + height * 0.35, height);
          ctx.stroke();
        }
      }

      raf = window.requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(draw);
    return function stop() {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }

  window.WebsiteAtlas = {
    projects,
    categories,
    drawProjectArt,
    startAmbient
  };
})();
