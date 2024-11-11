document
  .getElementById("languages")
  .addEventListener("change", navigateLanguage);

function navigateLanguage() {
  const selectedLanguage = document.getElementById("languages").value;
  if (selectedLanguage === "ru") {
    window.location.href = "ru.html"; // Redirects to the Russian version of the page
  } else if (selectedLanguage === "kz") {
    window.location.href = "kz.html"; // Redirects to the Kazakh version of the page
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

document.querySelector(".next").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("introVideo");
  const videoContainer = document.querySelector(".video-container");
  const content = document.querySelector(".content");

  video.onended = () => {
    videoContainer.classList.add("hidden");
    content.classList.add("show");
    setTimeout(() => {
      videoContainer.style.display = "none";
    }, 1000); // Delay to match the CSS transition
  };
});

// Initialize EmailJS with your user ID
(function () {
  emailjs.init("0ELYbxJSfdI0D1o3L");
})();

function sendMail() {
  const parametres = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    number: document.getElementById("number").value,
  };
  emailjs
    .send("service_z71vyvr", "template_tia16pb", parametres)
    .then(function (res) {
      alert("Succcess " + res.status);
    });
}
