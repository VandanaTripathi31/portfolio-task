// Get elements
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Track the current slide

// Function to update slides
function updateSlides(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Remove active class
    slide.style.left = i > index ? '100%' : '-100%'; // Position slides off-screen
  });
  slides[index].classList.add('active'); // Add active class to the current slide
  slides[index].style.left = '0'; // Center the active slide
}

// Event listener for the right arrow (Next Slide)
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateSlides(currentIndex);
});

// Event listener for the left arrow (Previous Slide)
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
  updateSlides(currentIndex);
});
// Select the navbar
const navbar = document.querySelector(".navbar");

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Initialize first slide
updateSlides(currentIndex);
// Gallery Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    galleryItems.forEach((item) => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
