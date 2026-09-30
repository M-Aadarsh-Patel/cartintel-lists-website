/* CartIntel landing page behavior. No dependencies. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---- Reveal on entry: sections, ledgers, headings. One-shot. ---- */
  var targets = document.querySelectorAll(".reveal, .sweep, .section > .wrap > h2, .statement");
  function show(el) { el.classList.add("in-view"); }
  if (reduce || !hasIO) {
    targets.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---- Nav condenses after the page scrolls past a sentinel. No scroll listener. ---- */
  var nav = document.querySelector(".nav");
  if (nav && hasIO) {
    var sentinel = document.createElement("div");
    sentinel.className = "nav-sentinel"; sentinel.setAttribute("aria-hidden", "true");
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("scrolled", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }

  /* ---- Typewriter: the hero record is typed in front of the reader, once. ---- */
  var sheet = document.querySelector("[data-typewriter]");
  if (sheet) {
    if (reduce || !hasIO) {
      sheet.classList.add("typed");
    } else {
      var fields = Array.prototype.slice.call(sheet.querySelectorAll("dl dd"));
      var plan = fields.map(function (dd) {
        var nodes = Array.prototype.slice.call(dd.childNodes);
        var text = dd.textContent;
        dd.style.minHeight = dd.offsetHeight + "px"; /* reserve the final height so nothing jumps */
        return { dd: dd, nodes: nodes, text: text };
      });
      plan.forEach(function (p) { p.dd.textContent = ""; });
      var started = false;
      function typeField(i) {
        if (i >= plan.length) { plan.forEach(function (p) { p.dd.classList.remove("typing"); }); sheet.classList.add("typed"); return; }
        var p = plan[i], n = 0, len = p.text.length;
        p.dd.classList.add("typing");
        (function tick() {
          n = Math.min(len, n + 1);
          p.dd.textContent = p.text.slice(0, n);
          if (n < len) { setTimeout(tick, 14); return; }
          /* Restore the original nodes (tags, highlighted spans) once the text is complete. */
          p.dd.textContent = ""; p.nodes.forEach(function (node) { p.dd.appendChild(node); });
          p.dd.classList.remove("typing");
          setTimeout(function () { typeField(i + 1); }, 90);
        })();
      }
      var startIO = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !started) { started = true; startIO.disconnect(); setTimeout(function () { typeField(0); }, 700); }
      }, { threshold: 0.35 });
      startIO.observe(sheet);
      /* If the reader is not looking at it within a few seconds, finish it anyway so nothing is ever hidden. */
      setTimeout(function () { if (!started) { started = true; startIO.disconnect(); plan.forEach(function (p) { p.dd.textContent = ""; p.nodes.forEach(function (node) { p.dd.appendChild(node); }); }); sheet.classList.add("typed"); } }, 6000);
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
    status.innerHTML = "<b>Your mail app should be opening.</b> If nothing happened, send those four things to <code>" + TO + "</code> and I'll reply within two business days.";
    status.classList.add("show");
    window.location.href = href;
    setTimeout(function () { btn.classList.remove("is-sent"); btn.querySelector(".btn-label").textContent = "Request a free sample"; }, 4000);
  });
})();
