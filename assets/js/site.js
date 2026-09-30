/* CartIntel landing page behavior. No dependencies. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---- One rule for every animation: an element waits until its own top reaches the 50% line
     of the viewport, where the eye is, then plays once. Rows are observed individually, so a
     ledger does not fire as a block. A passive, frame-throttled fallback covers frames where
     observers misfire, and anything already scrolled past completes instantly. ---- */
  var ROW = ".tier, .checklist li, .promise li, .price, .fields > div, .ask-list li, .moves > div, .howto li, .faq details, .compare-item";
  var rows = Array.prototype.slice.call(document.querySelectorAll(ROW));
  rows.forEach(function (el) { el.classList.add("row-anim"); });
  var pending = Array.prototype.slice.call(document.querySelectorAll(".reveal, .section > .wrap > h2, .statement, .sweep, .row-anim, [data-typewriter]"));
  pending = pending.filter(function (el, i) { return pending.indexOf(el) === i; });
  function show(el) {
    el.classList.add("in-view");
    el.querySelectorAll(".pencil-strike path").forEach(function (p) { p.style.strokeDashoffset = "0"; });
    if (el.hasAttribute("data-typewriter") && el.__typeStart) el.__typeStart();
  }
  /* Wrap every drawn check so a highlighter ring can flare when the stroke lands. */
  document.querySelectorAll("svg.draw").forEach(function (svg) {
    var w = document.createElement("span"); w.className = "tick"; svg.parentNode.insertBefore(w, svg); w.appendChild(svg);
  });
  var LINE = 0.5;
  if (reduce || !hasIO) {
    pending.forEach(show); pending = [];
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -" + Math.round(LINE * 100) + "% 0px", threshold: 0 });
    pending.forEach(function (el) { io.observe(el); });
    var ticking = false;
    function sweepPending() {
      ticking = false;
      if (!pending.length) return;
      var vh = window.innerHeight;
      pending = pending.filter(function (el) {
        if (el.classList.contains("in-view")) return false;
        var r = el.getBoundingClientRect();
        if (r.top < vh * LINE || r.bottom < 0) { show(el); io.unobserve(el); return false; }
        return true;
      });
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
        sheet.__typeStart = function () {
          if (started) return; started = true;
          /* Already scrolled past (anchor jump, back navigation): complete instantly, no show for nobody. */
          if (sheet.getBoundingClientRect().bottom < 0) { finishAll(); return; }
          sheet.setAttribute("aria-busy", "true"); setTimeout(function () { typeField(0); }, 150);
        };
        if (sheet.classList.contains("in-view")) sheet.__typeStart();
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
