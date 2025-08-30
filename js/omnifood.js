console.log("omnifood loaded");

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);
  
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

// Make mobile nav work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
})

// Close mobile menu on click
const mainNavLinkElements = document.querySelectorAll(".main-nav-link");
mainNavLinkElements.forEach((linkElement) =>
  linkElement.addEventListener("click", (e) => {
    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.toggle("nav-open");
    }
  }))

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  console.log("ent", ent);
  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
  
}, {
  root: null, // null means viewport
  threshold: 0,
  rootMargin: "-80px"
});
observer.observe(sectionHeroEl);
