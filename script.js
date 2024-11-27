document
  .getElementById("languages")
  .addEventListener("change", navigateLanguage);

function navigateLanguage() {
  const selectedLanguage = document.getElementById("languages").value;
  if (selectedLanguage === "ru") {
    window.location.href = "ru.html"; // Redirects to the Kazakh version
  } else if (selectedLanguage === "kz") {
    window.location.href = "kz.html"; // Redirects to the Russian version
  }
}

function changeImage(imageSrc) {
  // Change the displayed large image to the clicked thumbnail image
  const displayedImage = document.getElementById("displayedImage");
  displayedImage.src = imageSrc;
}
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0; // Start with the first slide

// Function to go to the next slide
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Function to go to the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Event listeners for manual navigation
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto-scroll functionality
let autoScrollInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

// Optional: Pause auto-scroll on user interaction
const sliderContainer = document.querySelector(".slider-container"); // Replace with your slider wrapper class or ID

sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoScrollInterval); // Stop auto-scroll when mouse enters the slider
});

sliderContainer.addEventListener("mouseleave", () => {
  autoScrollInterval = setInterval(nextSlide, 5000); // Restart auto-scroll when mouse leaves the slider
});

(function () {
  emailjs.init("tmMTF_XY70-hnlQfZ");
})();

function sendMail() {
  const parametres = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    number: document.getElementById("number").value,
  };
  emailjs
    .send("service_d55cp2c", "template_70e2jzb", parametres)
    .then(function (res) {
      alert("Succcess " + res.status);
    });
}
