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
