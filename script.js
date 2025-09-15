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

const galleries = document.querySelectorAll(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector("#lightbox .close");
const prev = document.querySelector("#lightbox .prev");
const next = document.querySelector("#lightbox .next");

let currentAlbum = [];
let currentIndex = 0;

// Fonction pour ouvrir une image
function openLightbox(images, index) {
  currentAlbum = images;
  currentIndex = index;
  lightboxImg.src = currentAlbum[currentIndex].src;
  lightbox.style.display = "block";
}

// Clic sur une image
galleries.forEach(gallery => {
  const images = gallery.querySelectorAll("img");
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(images, index);
    });
  });
});

// Navigation
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentAlbum.length;
  lightboxImg.src = currentAlbum[currentIndex].src;
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
  lightboxImg.src = currentAlbum[currentIndex].src;
});

// Fermeture
close.addEventListener("click", () => lightbox.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
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

// Ouvrir l'album au clic sur la couverture
document.querySelectorAll('.album .cover').forEach(cover => {
  cover.addEventListener('click', () => {
    const album = cover.closest('.album');
    const gallery = album.querySelector('.gallery');
    gallery.classList.toggle('hidden');
    gallery.scrollIntoView({ behavior: 'smooth' });
  });
});

