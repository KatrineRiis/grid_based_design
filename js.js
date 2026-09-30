/* Mobil Menu */
const navicon = document.querySelector(".navicon");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".logo");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
};

navicon.addEventListener("click", toggleMobileMenu);
mobileMenu.addEventListener("click", toggleMobileMenu);
logo.addEventListener("click", () => {
  if (mobileMenu.classList.contains("flex")) {
    toggleMobileMenu();
  }
});

const newsletterButton = document.getElementById("newsletterButton");
const newsletterPopover = document.getElementById("newsletterPopover");
const closePopover = document.getElementById("closePopover");
newsletterButton.addEventListener("click", function () {
  newsletterPopover.classList.toggle("active");
});
closePopover.addEventListener("click", function () {
  newsletterPopover.classList.remove("active");
});
document.addEventListener("click", function (event) {
  if (!newsletterPopover.contains(event.target) && !newsletterButton.contains(event.target)) {
    newsletterPopover.classList.remove("active");
  }
});

const images = document.querySelectorAll(".carousel-image");

let currentImage = 0;

function showImage(index) {
  // Remove "active" from every image
  images.forEach(function (image) {
    image.classList.remove("active");
  });

  // Add "active" to the selected image
  images[index].classList.add("active");
}

setInterval(function () {
  currentImage++;

  // if last img,
  // show first

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  // new image
  showImage(currentImage);
}, 3000);
