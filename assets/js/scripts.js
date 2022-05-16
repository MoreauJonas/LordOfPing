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
});
