/* CartIntel landing page behavior. No dependencies. */
(function () {
  "use strict";

  /* Reveal on entry, and the one authored motion: the highlight sweep and the pencil strike. */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal, .sweep");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* Sample request: compose an email in the visitor's mail app. Nothing is stored. */
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
    if (!ok) {
      var first = inputs.filter(function (i) { return wrapOf(i).classList.contains("invalid"); })[0];
      if (first) first.focus();
      return;
    }
    var name = field("f-name").value.trim();
    var agency = field("f-agency").value.trim();
    var email = field("f-email").value.trim();
    var zips = field("f-zips").value.trim();
    var subject = "Free sample request: " + zips.split(/\r?\n/)[0].slice(0, 60);
    var body = [
      "Hi Aadarsh,",
      "",
      "Please send me the free 10-record sample.",
      "",
      "Name: " + name,
      "Agency: " + agency,
      "Email: " + email,
      "ZIPs or area: " + zips,
      ""
    ].join("\n");
    var href = "mailto:" + TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.innerHTML = "<b>Your mail app should be opening.</b> If nothing happened, send those four things to <code>" + TO + "</code> and I'll reply within two business days.";
    status.classList.add("show");
    window.location.href = href;
  });
})();
