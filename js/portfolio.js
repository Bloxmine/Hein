// Author: Hein Dijstelbloem
// Last modified: 2024-13-03
// Description: This file contains the JavaScript code for the portfolio page.
//              It creates a starry sky and makes the stars twinkle.

// random number generator
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${getRandomNumber(0, 100)}%`;
    star.style.top = `${getRandomNumber(0, 50)}%`;
    return star;
}

function addStarsToSky(numStars) {
    const body = document.body;
    for (let i = 0; i < numStars; i++) {
        const star = createStar();
        body.appendChild(star); // append them to the body
    }
}

// twinkle little star
function animateStars() {
    const stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.style.animationDelay = `${getRandomNumber(0, 5)}s`;
    }
}

addStarsToSky(50);
animateStars();