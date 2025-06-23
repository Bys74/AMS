const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Ouvre/ferme le menu en cliquant sur le burger
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("active");
});

// Ferme le menu quand on clique sur un lien
const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Si le menu est actif, on le ferme
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      burger.classList.remove("open");
    }
  });
});
