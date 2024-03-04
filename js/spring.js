let springEnabled = false;
let springFlowers = [];
let flowerImages = ['flower1.png', 'flower2.png', 'flower3.png'];

function toggleSpring() {
    springEnabled = !springEnabled;
    let button = document.getElementById('toggleSnowBtn');

    if (springEnabled) {
        button.textContent = "Flowers are ON";
        createSpringFlowers();
    } else {
        button.textContent = "Flowers are OFF";
        removeSpringFlowers();
    }
}

toggleSpring();

document.getElementById('toggleSnowBtn').addEventListener('click', toggleSpring);

function createSpringFlowers() {
    let transparency = document.getElementById('transparencySlider').value;
    for (var i = 0; i < 50; i++) {
        var springFlower = document.createElement("div");
        springFlower.className = 'spring-flower';
        springFlower.style.left = Math.random() * 100 + "%";
        springFlower.style.animationDuration = Math.random() * 5 + 5 + "s";
        springFlower.style.backgroundImage = `url('images/${flowerImages[Math.floor(Math.random() * flowerImages.length)]}')`;
        springFlower.style.opacity = transparency;
        document.body.appendChild(springFlower);
        springFlowers.push(springFlower);
    }
}

function removeSpringFlowers() {
    for (var i = 0; i < springFlowers.length; i++) {
        document.body.removeChild(springFlowers[i]);
    }
    springFlowers = [];
}

document.getElementById('transparencySlider').addEventListener('input', function() {
    let transparency = this.value;
    for (var i = 0; i < springFlowers.length; i++) {
        springFlowers[i].style.opacity = transparency;
    }
});

// current hour
let currentHour = new Date().getHours();

// time of day background colour
if (currentHour >= 6 && currentHour < 12) {
    // Morning (6 to 12 H)
    document.body.style.background = "linear-gradient(#005AA7, #FFFDE4)";
    document.querySelector('#navbar').style.backgroundColor = "rgba(251, 217, 197, 0.5)";
} else if (currentHour >= 12 && currentHour < 18) {
    // Afternoon (12 to 18 H)
    document.body.style.background = "linear-gradient(#87CEEB, #EAFAFF, #EAFAFF, #EBC587)";
    document.querySelector('#navbar').style.backgroundColor = "rgba(251, 217, 197, 0.5)";
} else if (currentHour >= 18 && currentHour < 20) {
    // Evening (18 to 20 H)
    document.body.style.background = "linear-gradient(#00416A, #E4E5E6, #F5B415)";
} else {
    // Night (20 to 6 H)
    document.body.style.background = "linear-gradient(#000080, #000000)";
    document.querySelector('h1').style.color = "#FFFFFF";
}