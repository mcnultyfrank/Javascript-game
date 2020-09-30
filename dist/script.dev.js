"use strict";

var playerJump = document.querySelector(".player");
var screenClick = document.querySelector(".game-container");
var easyButton = document.querySelector(".easy");
var mediumButton = document.querySelector(".medium");
var hardButton = document.querySelector(".hard");
var startButtonBlur = document.querySelector(".start__button_blur");
var startButtonHover = document.querySelector(".start__button");
var startButton = document.querySelector(".start__button");
var Menu = document.querySelector(".menu-container");
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
});
startButton.addEventListener("click", function (e) {
  // if(easyButton.classList == "selected__difficulty")
  Menu.classList.add("start__menu__no__display");
  console.log('hi');
  playerJump.classList.add("player-roll");
  screenClick.addEventListener("click", function (e) {
    if (playerJump.classList == "player-jump") {
      return;
    }

    playerJump.classList.add("player-jump");
    setTimeout(function () {
      playerJump.classList.remove("player-jump");
    }, 900);
  });
});