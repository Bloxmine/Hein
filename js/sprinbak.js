let blossomEnabled = false;
let blossomLeaves = [];

function toggleBlossom() {
    blossomEnabled = !blossomEnabled;
    let button = document.getElementById('toggleSnowBtn');

    if (blossomEnabled) {
        // Start the blossom effect
        button.textContent = "Blossom is ON";
        createBlossomLeaves();
    } else {
        // Stop the blossom effect
        button.textContent = "Blossom is OFF";
        removeBlossomLeaves();
    }
}

toggleBlossom(); // Start the blossom effect by default

document.getElementById('toggleSnowBtn').addEventListener('click', toggleBlossom);

function createBlossomLeaves() {
    for (var i = 0; i < 50; i++) {
        var blossomLeaf = document.createElement("div");
        blossomLeaf.className = "blossom-leaf";
        blossomLeaf.style.left = Math.random() * 100 + "%";
        blossomLeaf.style.animationDuration = Math.random() * 5 + 5 + "s";
        document.body.appendChild(blossomLeaf);
        blossomLeaves.push(blossomLeaf);
    }
}

function removeBlossomLeaves() {
    for (var i = 0; i < blossomLeaves.length; i++) {
        document.body.removeChild(blossomLeaves[i]);
    }
    blossomLeaves = [];
}

// current hour
let currentHour = new Date().getHours();

// time of day background colour
if (currentHour >= 6 && currentHour < 12) {
    // Morning (6 to 12 H)
    document.body.style.background = "linear-gradient(#FFFEE8, #00D9FF)";
} else if (currentHour >= 12 && currentHour < 18) {
    // Afternoon (12 to 18 H)
    document.body.style.background = "linear-gradient(#87CEEB, #EAFAFF, #EAFAFF, #EBC587)";
} else if (currentHour >= 18 && currentHour < 20) {
    // Evening (18 to 20 H)
    document.body.style.background = "linear-gradient(#00416A, #E4E5E6, #F5B415)";
} else {
    // Night (20 to 6 H)
    document.body.style.background = "linear-gradient(#000080, #000000)";
    document.querySelector('h1').style.color = "#FFFFFF";
}