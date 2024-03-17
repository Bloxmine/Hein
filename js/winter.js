// Author: Hein Dijstelbloem
// Last modified: 2024-03-03
// Description: This file contains the JavaScript code for the winter page.
//              It creates snowflakes that fall down the screen.
// But it's also a mess, the seasons should be in a seperate file so there won't be any issues with other season pages.
let snowEnabled = false;
let snowflakes = [];
const seasons = ['winter', 'winter', 'winter', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
// might be better to not use the same season for 3 months in a row, try to find a clever way to handle this. perhaps a function that returns the season based on the month for accuracy?
const weatherConditions = ['snow', 'snow', 'snow', 'blossoms', 'blossoms', 'pollen', 'pollen', 'pollen', 'leaves', 'leaves', 'leaves', 'snow'];

const currentMonth = new Date().getMonth();
const currentSeason = seasons[currentMonth];
const currentWeather = weatherConditions[currentMonth];

document.getElementById('seasonParagraph').textContent = `You might notice the falling of ${currentWeather}, that's because it's ${currentSeason}.`;

function toggleSnow() {
    snowEnabled = !snowEnabled;
    let button = document.getElementById('toggleSnowBtn');

    if (snowEnabled) {
        button.textContent = "Snow is ON";
        createSnowflakes();
    } else {
        button.textContent = "Snow is OFF";
        removeSnowflakes();
    }
}

toggleSnow(); // snow turns on

document.getElementById('toggleSnowBtn').addEventListener('click', toggleSnow);

function createSnowflakes() {
    let transparency = document.getElementById('transparencySlider').value; // slider value
    for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100 + "%";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
        snowflake.style.opacity = transparency;
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);
    }
}

function removeSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        document.body.removeChild(snowflakes[i]);
    }
    snowflakes = [];
}

document.getElementById('transparencySlider').addEventListener('input', function() {
    let transparency = this.value;
    for (var i = 0; i < snowflakes.length; i++) {
        snowflakes[i].style.opacity = transparency;
    }
});

// current hour
let currentHour = new Date().getHours();

// time of day background colour
if (currentHour >= 6 && currentHour < 12) {
    // Morning (6 to 12 H)
    document.body.style.background = "linear-gradient(#005AA7, #FFFDE4)";
    document.querySelector('h1').style.color = "#FFFFFF";
} else if (currentHour >= 12 && currentHour < 18) {
    // Afternoon (12 to 18 H)
    document.body.style.background = "linear-gradient(#EAF6FF, #87CEEB)";
    document.querySelector('h1').style.color = "#003366";
    document.querySelector('#navbar').style.backgroundColor = "rgba(0, 70, 140, 0.2)"; // 50% transparent
} else if (currentHour >= 18 && currentHour < 20) {
    // Evening (18 to 20 H)
    document.body.style.background = "linear-gradient(#00416A, #E4E5E6, #F5B415)";
    document.querySelector('h1').style.color = "#FFFFFF";
} else {
    // Night (20 to 6 H)
    document.body.style.background = "linear-gradient(#000080, #000000)";
    document.querySelector('h1').style.color = "#FFFFFF";
}