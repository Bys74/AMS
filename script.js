// Menu responsive
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Apparition au scroll
const elements = document.querySelectorAll(".fade-in, .slide-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Lightbox galerie
const gallery = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector("#lightbox .close");

gallery.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Voir plus / Voir moins pour chaque actu (accordéon fluide)
document.querySelectorAll(".toggle-text").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const card = btn.closest(".news-card");
    const moreText = card.querySelector(".more-text");

    if (card.classList.contains("open")) {
      // Ferme seulement cette card
      moreText.style.maxHeight = null;
      card.classList.remove("open");
      btn.textContent = "Lire plus";
    } else {
      // Ouvre seulement cette card
      moreText.style.maxHeight = moreText.scrollHeight + "px";
      card.classList.add("open");
      btn.textContent = "Lire moins";
    }
  });
});



// Scroll doux pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
    nav.classList.remove("active"); // ferme le menu sur mobile
  });
});
