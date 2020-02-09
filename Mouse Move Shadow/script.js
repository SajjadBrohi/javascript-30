const HERO = document.querySelector(".hero");
const CONTENT = HERO.querySelector("h1");



function mouseMoveOnHero(e) {
    console.log(e);
    
}


HERO.addEventListener("mousemove", mouseMoveOnHero);