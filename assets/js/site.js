/* CartIntel landing page behavior. No dependencies. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---- Reveal on entry: content is shown a quarter viewport ahead of the fold so nothing is
     ever blank behind a heading. Strokes (.sweep: highlights, strikes, ticks, stamps) are
     different: they are the page's authored moments and fire only once their own element is
     inside the viewport, otherwise they play out of sight and the reader never sees them.
     Both have a passive, rAF-throttled fallback for frames where observers misfire. ---- */
  var pendingReveal = Array.prototype.slice.call(document.querySelectorAll(".reveal, .section > .wrap > h2, .statement"));
  var pendingStroke = Array.prototype.slice.call(document.querySelectorAll(".sweep"));
  function show(el) {
    el.classList.add("in-view");
    el.querySelectorAll(".pencil-strike path").forEach(function (p) { p.style.strokeDashoffset = "0"; });
  }
  if (reduce || !hasIO) {
    pendingReveal.forEach(show); pendingStroke.forEach(show); pendingReveal = []; pendingStroke = [];
  } else {
    var ioReveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); ioReveal.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -4% 0px", threshold: 0 });
    pendingReveal.forEach(function (el) { ioReveal.observe(el); });
    var ioStroke = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); ioStroke.unobserve(e.target); } });
    }, { rootMargin: "-8% 0px -40% 0px", threshold: 0 });
    pendingStroke.forEach(function (el) { ioStroke.observe(el); });
    var ticking = false;
    function sweepPending() {
      ticking = false;
      var vh = window.innerHeight;
      if (pendingReveal.length) {
        pendingReveal = pendingReveal.filter(function (el) {
          if (el.classList.contains("in-view")) return false;
          if (el.getBoundingClientRect().top < vh * 0.96) { show(el); ioReveal.unobserve(el); return false; }
          return true;
        });
      }
      if (pendingStroke.length) {
        pendingStroke = pendingStroke.filter(function (el) {
          if (el.classList.contains("in-view")) return false;
          var r = el.getBoundingClientRect();
          var inBand = r.top < vh * 0.6 && r.bottom > vh * 0.08;
          var scrolledPast = r.bottom < 0;
          if (inBand || scrolledPast) { show(el); ioStroke.unobserve(el); return false; }
          return true;
        });
      }
    }
    function queueSweep() { if (!ticking) { ticking = true; window.requestAnimationFrame(sweepPending); } }
    window.addEventListener("scroll", queueSweep, { passive: true });
    window.addEventListener("resize", queueSweep, { passive: true });
    window.addEventListener("pageshow", queueSweep);
    window.addEventListener("hashchange", function () { setTimeout(queueSweep, 50); });
    queueSweep();
    setTimeout(queueSweep, 400);
  }

  /* Pencil strikes: build a slightly wavering path across the block in pixel space, so the dash
     math is exact on every browser; the percentage <line> in the markup is the no-JS fallback. */
  document.querySelectorAll(".pencil-strike").forEach(function (svg) {
    var line = svg.querySelector("line"); if (line) line.remove();
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("fill", "none"); p.setAttribute("stroke", "currentColor"); p.setAttribute("stroke-width", "2.4"); p.setAttribute("stroke-linecap", "round");
    svg.appendChild(p);
    function draw() {
      var w = svg.clientWidth, h = svg.clientHeight; if (!w || !h) return;
      var y0 = h * 0.84, y1 = h * 0.16, dip = h * 0.07;
      p.setAttribute("d", "M0 " + y0.toFixed(1) + " C " + (w * 0.3).toFixed(1) + " " + (y0 - dip).toFixed(1) + ", " + (w * 0.62).toFixed(1) + " " + (y1 + dip * 1.6).toFixed(1) + ", " + w + " " + y1.toFixed(1));
      var L = p.getTotalLength(); p.style.strokeDasharray = L; 
      if (!(reduce || svg.closest(".in-view"))) p.style.strokeDashoffset = L; else p.style.strokeDashoffset = "0";
    }
    draw();
    if ("ResizeObserver" in window) new ResizeObserver(draw).observe(svg);
  });
  /* ---- Nav condenses after the page scrolls past a sentinel. No scroll listener. ---- */
  var nav = document.querySelector(".nav");
  if (nav && hasIO) {
    var sentinel = document.createElement("div");
    sentinel.className = "nav-sentinel"; sentinel.setAttribute("aria-hidden", "true");
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("scrolled", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
    var heroCta = document.querySelector(".hero .btn-primary");
    if (heroCta) {
      new IntersectionObserver(function (entries) {
        nav.classList.toggle("past-hero", !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0);
      }, { threshold: 0 }).observe(heroCta);
    }
  }

  /* ---- Typewriter: the hero record is typed in front of the reader, once.
     The real text never leaves the accessibility tree: it is visually hidden while an
     aria-hidden twin is typed, then shown again. ---- */
  var sheet = document.querySelector("[data-typewriter]");
  if (sheet) {
    if (reduce || !hasIO) {
      sheet.classList.add("typed");
    } else {
      var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
      ready.then(function () {
        var fields = Array.prototype.slice.call(sheet.querySelectorAll("dl dd"));
        var plan = fields.map(function (dd) {
          var src = document.createElement("span"); src.className = "dd-src";
          while (dd.firstChild) src.appendChild(dd.firstChild);
          dd.appendChild(src);
          dd.style.minHeight = dd.offsetHeight + "px"; /* measured with the real fonts, so nothing jumps */
          var twin = document.createElement("span"); twin.className = "dd-type"; twin.setAttribute("aria-hidden", "true");
          src.classList.add("visually-hidden"); dd.appendChild(twin);
          return { src: src, twin: twin, text: src.textContent };
        });
        function finishAll() {
          plan.forEach(function (p) { p.twin.remove(); p.src.classList.remove("visually-hidden"); });
          sheet.removeAttribute("aria-busy"); sheet.classList.add("typed");
        }
        var started = false;
        var MS_PER_CHAR = 4.8, FIELD_GAP = 40;
        function typeField(i) {
          if (i >= plan.length) { finishAll(); return; }
          var p = plan[i], len = p.text.length, t0 = null;
          p.twin.classList.add("typing");
          (function frame(ts) {
            if (t0 === null) t0 = ts;
            var n = Math.min(len, Math.floor((ts - t0) / MS_PER_CHAR));
            p.twin.textContent = p.text.slice(0, n);
            if (n < len) { window.requestAnimationFrame(frame); return; }
            p.twin.remove(); p.src.classList.remove("visually-hidden");
            setTimeout(function () { typeField(i + 1); }, FIELD_GAP);
          })(performance.now());
        }
        var startIO = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting && !started) { started = true; startIO.disconnect(); sheet.setAttribute("aria-busy", "true"); setTimeout(function () { typeField(0); }, 150); }
        }, { threshold: 0.35 });
        startIO.observe(sheet);
        /* If the reader never looks at it, finish anyway so nothing stays hidden. */
        setTimeout(function () { if (!started) { started = true; startIO.disconnect(); finishAll(); } }, 6000);
      });
    }
  }

  /* ---- Sample request: compose an email in the visitor's mail app. Nothing is stored. ---- */
  var form = document.getElementById("sample-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var TO = "hello@cartintel.co"; /* data-decision: brand */
  function field(id) { return document.getElementById(id); }
  function wrapOf(input) { return input.closest(".field"); }
  function setInvalid(input, bad) {
    wrapOf(input).classList.toggle("invalid", bad);
    input.setAttribute("aria-invalid", bad ? "true" : "false");
    if (bad) input.setAttribute("aria-describedby", input.id + "-err"); else input.removeAttribute("aria-describedby");
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
    document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (e) {} document.body.removeChild(ta);
  }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  var inputs = ["f-name", "f-agency", "f-email", "f-zips"].map(field);
  inputs.forEach(function (input) {
    input.addEventListener("input", function () { if (wrapOf(input).classList.contains("invalid")) validate(input); });
    input.addEventListener("blur", function () { if (input.value.trim()) validate(input); });
  });
  function validate(input) {
    var v = input.value.trim();
    var bad = !v || (input.type === "email" && !validEmail(v));
    setInvalid(input, bad);
    return !bad;
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var ok = inputs.map(validate).every(Boolean);
    if (!ok) { var first = inputs.filter(function (i) { return wrapOf(i).classList.contains("invalid"); })[0]; if (first) first.focus(); return; }
    var name = field("f-name").value.trim(), agency = field("f-agency").value.trim(), email = field("f-email").value.trim(), zips = field("f-zips").value.trim();
    var subject = "Free sample request: " + zips.split(/\r?\n/)[0].slice(0, 60);
    var body = ["Hi Aadarsh,", "", "Please send me the free 10-record sample.", "", "Name: " + name, "Agency: " + agency, "Email: " + email, "ZIPs or area: " + zips, ""].join("\n");
    var href = "mailto:" + TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    var btn = form.querySelector("button[type=submit]");
    btn.classList.add("is-sent"); btn.querySelector(".btn-label").textContent = "Opening your mail app";
    status.innerHTML = "<b>Your mail app should be opening.</b> If nothing happened, send those four things to <code>" + TO + "</code> and I'll reply within two business days. <button type=\"button\" class=\"copy-btn\" id=\"copy-request\">Copy the request text</button>";
    status.classList.add("show");
    var copyBtn = document.getElementById("copy-request");
    copyBtn.addEventListener("click", function () {
      var text = "To: " + TO + "\nSubject: " + subject + "\n\n" + body;
      var done = function () { copyBtn.textContent = "Copied"; setTimeout(function () { copyBtn.textContent = "Copy the request text"; }, 2500); };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); }); } else { fallbackCopy(text, done); }
    });
    window.location.href = href;
    setTimeout(function () { btn.classList.remove("is-sent"); btn.querySelector(".btn-label").textContent = "Request a free sample"; }, 4000);
  });
})();
