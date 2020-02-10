const HERO = document.querySelector(".hero");
const CONTENT = HERO.querySelector("h1");

function mouseMoveOnHero(e) {

    let xCentre = window.innerWidth / 2;
    let yCentre = window.innerHeight / 2;

    let xAxis = (e.x - xCentre) / 2;
    let yAxis = (e.y - yCentre) / 2;

    CONTENT.style.textShadow = `
        ${xAxis}px ${yAxis}px 0 rgb(255, 121, 233), 
        ${xAxis * -1}px ${yAxis}px 0 blue, 
        ${xAxis}px ${yAxis * -1}px 0 rgb(107, 218, 255), 
        ${xAxis * -1}px ${yAxis * -1}px 0 rgb(87, 255, 87)
    `
}


HERO.addEventListener("mousemove", mouseMoveOnHero);