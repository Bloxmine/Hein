// Get all the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Get all the divs
const divs = document.querySelectorAll('div');

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Get the value of the checkbox
        const checkboxValue = checkbox.value;

        // Loop through each div
        divs.forEach(div => {
            // Get the div's id
            const divId = div.getAttribute('id');

            // Check if the div's id matches the checkbox value
            if (divId === checkboxValue) {
                // Show or hide the div based on the checkbox state
                div.style.display = checkbox.checked ? 'block' : 'none';
            }
        });
    });
});