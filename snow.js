let snowEnabled = false;
let snowflakes = [];

function toggleSnow() {
    snowEnabled = !snowEnabled;
    let button = document.getElementById('toggleSnowBtn');

    if (snowEnabled) {
        // Start the snow effect
        button.textContent = "Snow is ON";
        createSnowflakes();
    } else {
        // Stop the snow effect
        button.textContent = "Snow is OFF";
        removeSnowflakes();
    }
}

toggleSnow(); // Start the snow effect by default

document.getElementById('toggleSnowBtn').addEventListener('click', toggleSnow);

function createSnowflakes() {
    for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100 + "%";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
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