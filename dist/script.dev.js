"use strict";

var player = document.querySelector(".player");
player.addEventListener("click", function (e) {
  e.target.classList.add("player-jump");
});