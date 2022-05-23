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


    /* ZOOM IMAGE (page-army) */ 
    const zoom = document.getElementById("zoom");
    if (zoom) {
      const zoomImg = document.getElementById("zoom-img");
      zoom.classList.remove("active");
      for (let i = 1; i <= 24; i++) {
        if (e.target.id === "family-img" + i) {
          zoom.classList.add("active");
          zoomImg.src = e.target.src;
        }
      }
    }
});

/* CONTACT FORM */
const message =
  "Merci de nous avoir contacté, si votre question ou suggestion est pertinente, nous vous répondrons sous peu !";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
