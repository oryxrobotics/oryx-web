/* Oryx marketing site — mobile menu + on-scroll reveal. No dependencies. */
(function () {
  "use strict";

  // Mobile menu toggle
  var btn = document.getElementById("menubtn");
  var links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("open"); });
  }

  // Reveal sections as they scroll into view
  var targets = document.querySelectorAll(
    ".stat, .phase, .flow-step, .price-card, .why-card, .stage, .note, .banner, .robot-art, .robot-copy"
  );
  if (!("IntersectionObserver" in window) || !targets.length) return;
  targets.forEach(function (t) { t.classList.add("reveal"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  targets.forEach(function (t) { io.observe(t); });
})();
