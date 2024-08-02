// simple random number generator for the two dices in img1 and img2

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// manipulating img1 dice images

if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}

if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}

if (randomNumber1 === 3) {
  document.querySelector(".img6").setAttribute("src", "./images/dice6.png");
}

// manipulating img2 dice images

if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  }
  if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  }
  
  if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  }
  if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  }
  if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  }
  
  if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }
  