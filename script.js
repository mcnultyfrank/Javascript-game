const playerJump = document.querySelector(".player");
const screenClick = document.querySelector(".game-container");
const easyButton = document.querySelector(".easy");
const mediumButton = document.querySelector(".medium");
const hardButton = document.querySelector(".hard");
const startButtonBlur = document.querySelector(".start__button_blur");
const startButtonHover = document.querySelector(".start__button");
const startButton = document.querySelector(".start__button");
const Menu = document.querySelector(".menu-container");




        easyButton.addEventListener("click", e => {
                easyButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                mediumButton.classList.remove("selected__difficulty");
                hardButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
        })
        mediumButton.addEventListener("click", e => {
                mediumButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                easyButton.classList.remove("selected__difficulty");
                hardButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
        })
        hardButton.addEventListener("click", e => {
                hardButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                easyButton.classList.remove("selected__difficulty");
                mediumButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
        })
        startButton.addEventListener("click", e => {
                // if(easyButton.classList == "selected__difficulty")
                Menu.classList.add("start__menu__no__display");
                console.log('hi')
                screenClick.addEventListener("click", e => {
                        if(playerJump.classList == "player-jump"){return}
                        playerJump.classList.add("player-jump");
                        setTimeout(function(){
                        playerJump.classList.remove("player-jump");
                        },900);})
        
        })