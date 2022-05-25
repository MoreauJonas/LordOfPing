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

  /* DYSLEXIC MODE */
  const dyslexic = document.getElementById("dyslexic");
  if (e.target === dyslexic) {
    document.getElementsByTagName("body")[0].classList.toggle("active");
    dyslexic.classList.toggle("active");
    document.cookie === "dyslexic=true"
      ? (document.cookie = "dyslexic=false")
      : (document.cookie = "dyslexic=true");
  }
});
if (document.cookie === "dyslexic=true") {
  console.log("dyslexic");
  document.getElementsByTagName("body")[0].classList.add("active");
  document.getElementById("dyslexic")?.classList.add("active");
}

/* MINI-GAME */
let gameTime = 30;
let gameTimer;
const random = Math.floor(Math.random() * 100) + 1;
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

/* SHOP */
const products = [
  {
    name: "T-Shirt",
    price: 10,
    img: "tshirt.jpg",
  },
  {
    name: "Mug",
    price: 5,
    img: "mug.jpg",
  },
  {
    name: "Badge",
    price: 1,
    img: "badge.jpg",
  },
  {
    name: "Coque de téléphone",
    price: 10,
    img: "phoneshell.jpg",
  },
  {
    name: "Sac à dos",
    price: 10,
    img: "backpack.jpg",
  },
  {
    name: "Banane",
    price: 10,
    img: "banana.jpg",
  },
];
const cards = document.querySelector(".shop");

function createCard(title, price, img) {
  const card = document.createElement("div");
  card.classList.add("shopCase");
  cards.appendChild(card);

  const cardImg = document.createElement("img");
  cardImg.src = "/assets/img/products/" + img;
  card.appendChild(cardImg);

  const cardBody = document.createElement("div");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardBody.appendChild(cardTitle);
  cardTitle.innerHTML = title;

  const cardButton = document.createElement("button");
  cardButton.onclick = () => audio("ethopauxpannier");
  cardBody.appendChild(cardButton);
  let text = `Acheter (${price}€)`;
  cardButton.innerHTML = text;
}

if (cards) {
  for (let i of products) {
    createCard(i.name, i.price, i.img);
  }
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
