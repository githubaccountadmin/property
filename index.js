// Function to handle the continue button click event
function handleContinueButtonClick(event) {
    console.log("Continue button clicked!");
    event.preventDefault(); // Prevent default behavior
    handleButtonClick(); // Call the function to handle button click action
}

// Function to open the popup
function openPopup() {
    console.log("Opening popup");
    fetch('pop.html')
        .then(response => response.text())
        .then(data => {
            const popupContainer = document.createElement('div');
            popupContainer.classList.add('popup-container');
            popupContainer.innerHTML = data;

            const continueButton = popupContainer.querySelector('.continue-button');

            continueButton.addEventListener('click', handleContinueButtonClick);

            document.body.appendChild(popupContainer);

            console.log('Popup opened:', popupContainer);
            console.log('Currently focused element:', document.activeElement);

            // Call the handleButtonClick function directly
            handleButtonClick();
        })
        .catch(error => console.error('Error loading popup content:', error));
}

function closePopup() {
    console.log('Closing popup...');
    const popupContainer = document.querySelector('.popup-container');
    console.log('Popup container:', popupContainer);
    if (popupContainer) {
        popupContainer.remove();
        console.log('Popup closed.');
    } else {
        console.log('Popup container not found.');
    }

    // Enable focus on the body element
    document.body.removeAttribute('tabindex');
}

// Function to handle button click action
function handleButtonClick() {
    console.log("HandleButtonClick function called.");
    closePopup();
    console.log('Currently focused element after closing popup:', document.activeElement);
}

// Call the openPopup function to display the popup
console.log("Opening popup");
openPopup();
