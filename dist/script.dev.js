"use strict";

var player = document.querySelector(".player");
var enemyAnimation = document.querySelector(".enemy");
var screenClick = document.querySelector(".game-container");
var easyButton = document.querySelector(".easy");
var mediumButton = document.querySelector(".medium");
var hardButton = document.querySelector(".hard");
var startButtonBlur = document.querySelector(".start__button_blur");
var startButtonHover = document.querySelector(".start__button");
var startButton = document.querySelector(".start__button");
var Menu = document.querySelector(".menu-container");
var sunAnimation = document.querySelector(".sun");
var moonAnimation = document.querySelector(".moon");
var backgroundAnimation = document.querySelector(".furthestbackground");
var cloudsAnimation = document.querySelector(".fa-cloud");
var endGame = document.querySelector(".sun-animation");
var info = document.querySelector(".fa-question");
var openInfo = document.querySelector(".info__modal__show");
var closeInfo = document.querySelector(".info__modal__hide");
var enemyRect = enemyAnimation.getBoundingClientRect();
var playerRect = player.getBoundingClientRect();
var sunRect = sunAnimation.getBoundingClientRect();
console.log(playerRect, enemyRect); // Pre game Menu Javascript

info.addEventListener("click", function (e) {
  openInfo.classList.remove("info__modal__hide");
});
closeInfo.addEventListener("click", function (e) {
  closeInfo.classList.add("info__modal__hide");
});
easyButton.addEventListener("click", function (e) {
  easyButton.classList.add("selected__difficulty");
  startButtonBlur.classList.remove("start__button_blur");
  mediumButton.classList.remove("selected__difficulty");
  hardButton.classList.remove("selected__difficulty");
  startButtonHover.classList.add("start__button__hover");
});
mediumButton.addEventListener("click", function (e) {
  mediumButton.classList.add("selected__difficulty");
  startButtonBlur.classList.remove("start__button_blur");
  easyButton.classList.remove("selected__difficulty");
  hardButton.classList.remove("selected__difficulty");
  startButtonHover.classList.add("start__button__hover");
});
hardButton.addEventListener("click", function (e) {
  hardButton.classList.add("selected__difficulty");
  startButtonBlur.classList.remove("start__button_blur");
  easyButton.classList.remove("selected__difficulty");
  mediumButton.classList.remove("selected__difficulty");
  startButtonHover.classList.add("start__button__hover");
}); // Beginning of game javascript       

startButton.addEventListener("click", function (e) {
  // if(easyButton.classList == "selected__difficulty")
  Menu.classList.add("start__menu__no__display");
  player.classList.add("player-roll");
  moonAnimation.classList.add("moon-animation");
  setTimeout(function () {
    {
      sunAnimation.classList.add("sun-animation");
    }
  }, 20000);
  setTimeout(function () {
    {
      moonAnimation.classList.add("moon__remove");
    }
  }, 20000);
  cloudsAnimation.classList.add("fa-cloud-animation");
  setTimeout(function () {
    {
      enemyAnimation.classList.add("enemy-animation");
    }
  }, 3000);
  backgroundAnimation.classList.add("furthestbackground-animation");
  screenClick.addEventListener("click", function (e) {
    if (player.classList == "player-jump") {
      return;
    }

    player.classList.add("player-jump");
    setTimeout(function () {
      player.classList.remove("player-jump");
    }, 400);
  });
}); // endGame.adEventLister('animationend', () => {
//         console.log('end');
// })