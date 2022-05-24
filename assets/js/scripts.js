document.addEventListener("click", function (e) {
  /* NAVBAR MOBILE */
  const menu = document.getElementById("headerMenu");
  const mobile = document.getElementById("mobileMenu");
  if (e.target === mobile) {
    mobile.classList.toggle("active");
    menu.classList.toggle("active");
  } else {
    mobile?.classList.remove("active");
    menu?.classList.remove("active");
  }

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

/* MINI-GAME */
let gameTime = 30;
let gameTimer;
const random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let gameAudio = new Audio(`/assets/audio/music.mp3`);
function game() {
  if (gameTime === 30) {
    gameAudio.volume = 0.1;
    gameAudio.play();
    gameTimer = setInterval(function () {
      gameTime--;
      document.getElementById("gameTime").innerHTML = gameTime;
      if (gameTime === 0) {
        gameAudio.pause();
        clearInterval(gameTimer);
        audio("cestlqdefqite");
      }
    }, 1000);
  }

  if (gameTime !== 0) {
    const game = document.getElementById("game");
    const result = parseInt(game.value);
    const gameText = document.getElementById("gameText");
    if (result < random) {
      gameText.innerHTML = "c'est plus";
      audio("cestplus");
      game.placeholder = result;
      game.value = undefined;
    } else if (result > random) {
      gameText.innerHTML = "c'est moins";
      audio("cestmoin");
      game.placeholder = result;
      game.value = undefined;
    } else if (result === random) {
      gameText.innerHTML = "Félicitation vous avez Gagné !";
      gameAudio.pause();
      audio("bienjouertuagagner");
      gameTime = 0;
      clearInterval(gameTimer);
    } else {
      gameText.innerHTML = "Vous devez entre un nombre pour jouer !";
    }
  }
}

/* CHICKEN LOVER SONG */
function audio(sound) {
  let audio = new Audio(`/assets/audio/${sound}.mp3`);
  audio.play();
}

function cotcot() {
  let random = Math.floor(Math.random() * 3);
  let sound = ["cocoot", "cocot!", "cotcot"];
  audio(sound[random]);
}

/* CONTACT FORM */
const message =
  "Merci de nous avoir contacté, si votre question ou suggestion est pertinente, nous vous répondrons sous peu !";
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

/* SECRET PAGE */
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
