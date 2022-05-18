document.addEventListener("click", function (e) {
  /* NAVBAR MOBILE */
  const menu = document.getElementById("headerMenu");
  const mobile = document.getElementById("mobileMenu");
  if (e.target === mobile) {
    mobile.classList.toggle("active");
    menu.classList.toggle("active");
  } else {
    mobile.classList.remove("active");
    menu.classList.remove("active");
  }

  /* CHICKEN LOVER SONG */
});

const message =
  "Merci de nous avoir contacté, si votre question ou suggestion est pertinente, nous vous répondrons sous peu !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });