const player = document.querySelector(".player");


player.addEventListener("click", e => {
        e.target.classList.add("player-jump");
})
