const player = document.querySelector(".player");
const enemyAnimation = document.querySelector(".enemy");
const screenClick = document.querySelector(".game-container");
const easyButton = document.querySelector(".easy");
const mediumButton = document.querySelector(".medium");
const hardButton = document.querySelector(".hard");
const startButtonBlur = document.querySelector(".start__button_blur");
const startButtonHover = document.querySelector(".start__button");
const startButton = document.querySelector(".start__button");
const Menu = document.querySelector(".menu-container");
const sunAnimation = document.querySelector(".sun");
const moonAnimation = document.querySelector(".moon");
const backgroundAnimation = document.querySelector(".furthestbackground");
const cloudsAnimation = document.querySelector(".fa-cloud");
const endGame = document.querySelector(".sun-animation");
const info = document.querySelector(".fa-question");
const openInfo = document.querySelector(".info__modal__show");
const closeInfo = document.querySelector(".info__modal__hide");

// collision
const enemyRect = enemyAnimation.getBoundingClientRect();
const playerRect = player.getBoundingClientRect();
console.log(enemyRect, "player", playerRect, "enemy");


if (playerRect.bottom < enemyRect.top){
        alert('you lose');
}

// when difficulty selected, 

// Pre game Menu Javascript
        info.addEventListener("click", e => {
                openInfo.classList.remove("info__modal__hide");
        })
        closeInfo.addEventListener("click", e => {
                closeInfo.classList.add("info__modal__hide");
        })
        easyButton.addEventListener("click", e => {
                easyButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                mediumButton.classList.remove("selected__difficulty");
                hardButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
                enemyAnimation.classList.remove("enemy-animation-medium");
                enemyAnimation.classList.remove("enemy-animation-hard");

                        setTimeout(function(){
                        {enemyAnimation.classList.add("enemy-animation-easy")}
                        },3000);
                
        
        })
        mediumButton.addEventListener("click", e => {
                mediumButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                easyButton.classList.remove("selected__difficulty");
                hardButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
                enemyAnimation.classList.remove("enemy-animation-easy");
                enemyAnimation.classList.remove("enemy-animation-hard");

                        setTimeout(function(){
                        {enemyAnimation.classList.add("enemy-animation-medium")}
                        },3000);
        })
        hardButton.addEventListener("click", e => {
                hardButton.classList.add("selected__difficulty");
                startButtonBlur.classList.remove("start__button_blur")
                easyButton.classList.remove("selected__difficulty");
                mediumButton.classList.remove("selected__difficulty");
                startButtonHover.classList.add("start__button__hover");
                enemyAnimation.classList.remove("enemy-animation-medium");
                enemyAnimation.classList.remove("enemy-animation-easy");

                        setTimeout(function(){
                        {enemyAnimation.classList.add("enemy-animation-hard")}
                        },3000);
        })

  
// Beginning of game javascript       
        startButton.addEventListener("click", e => {
                // if(easyButton.classList == "selected__difficulty")
                
                Menu.classList.add("start__menu__no__display");
                player.classList.add("player-roll");
                moonAnimation.classList.add("moon-animation");
                setTimeout(function(){
                        {sunAnimation.classList.add("sun-animation");}
                        },20000);
                        setTimeout(function(){
                        {moonAnimation.classList.add("moon__remove");}
                                },20000);
                cloudsAnimation.classList.add("fa-cloud-animation");
               
                
                backgroundAnimation.classList.add("furthestbackground-animation");
                screenClick.addEventListener("click", e => {
                        if(player.classList == "player-jump"){return}
                        player.classList.add("player-jump");
                        setTimeout(function(){
                        player.classList.remove("player-jump");
                        },400);})
        })

        
        // endGame.adEventLister('animationend', () => {
        //         console.log('end');
        // })