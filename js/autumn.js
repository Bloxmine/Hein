let autumnEnabled = false; // Updated variable name
let autumnLeaves = []; // Updated variable name
let leafImages = ['leaf1.png', 'leaf2.png', 'leaf3.png']; // Added leaf image list

function toggleAutumn() { // Updated function name
    autumnEnabled = !autumnEnabled; // Updated variable name
    let button = document.getElementById('toggleSnowBtn');

    if (autumnEnabled) {
        // Start the autumn effect
        button.textContent = "Leaves are ON"; // Updated button text
        createAutumnLeaves(); // Updated function name
    } else {
        // Stop the autumn effect
        button.textContent = "Leaves are OFF"; // Updated button text
        removeAutumnLeaves(); // Updated function name
    }
}

toggleAutumn(); // Start the autumn effect by default

document.getElementById('toggleSnowBtn').addEventListener('click', toggleAutumn);

function createAutumnLeaves() {
    let transparency = document.getElementById('transparencySlider').value; // Get the value of the transparency slider
    for (var i = 0; i < 50; i++) {
        var autumnLeaf = document.createElement("div");
        autumnLeaf.className = 'autumn-leaf'; // Add the class to the leaf
        autumnLeaf.style.left = Math.random() * 100 + "%";
        autumnLeaf.style.animationDuration = Math.random() * 5 + 5 + "s";
        autumnLeaf.style.backgroundImage = `url('images/${leafImages[Math.floor(Math.random() * leafImages.length)]}')`;
        autumnLeaf.style.opacity = transparency; // Set the opacity based on the slider value
        document.body.appendChild(autumnLeaf);
        autumnLeaves.push(autumnLeaf);
    }
}

function removeAutumnLeaves() { // Updated function name
    for (var i = 0; i < autumnLeaves.length; i++) {
        document.body.removeChild(autumnLeaves[i]);
    }
    autumnLeaves = []; // Updated variable name
}

document.getElementById('transparencySlider').addEventListener('input', function() {
    let transparency = this.value;
    for (var i = 0; i < autumnLeaves.length; i++) {
        autumnLeaves[i].style.opacity = transparency;
    }
});

// current hour
let currentHour = new Date().getHours();

// time of day background colour
if (currentHour >= 6 && currentHour < 12) {
    // Morning (6 to 12 H)
    document.body.style.background = "linear-gradient(#005AA7, #FFFDE4)";
} else if (currentHour >= 12 && currentHour < 18) {
    // Afternoon (12 to 18 H)
    document.body.style.background = "linear-gradient(#87CEEB, #EAFAFF, #EAFAFF, #EBC587)";
    document.querySelector('#navbar').style.backgroundColor = "rgba(204, 119, 34, 0.5)"; // 50% transparent brownish orange
} else if (currentHour >= 18 && currentHour < 20) {
    // Evening (18 to 20 H)
    document.body.style.background = "linear-gradient(#00416A, #E4E5E6, #F5B415)";
} else {
    // Night (20 to 6 H)
    document.body.style.background = "linear-gradient(#000080, #000000)";
    document.querySelector('h1').style.color = "#FFFFFF";
}