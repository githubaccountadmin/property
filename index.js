function openPopup() {
    console.log("Opening popup");
    fetch('popup.html')
        .then(response => response.text())
        .then(data => {
            const popupContainer = document.createElement('div');
            popupContainer.classList.add('popup-container');
            popupContainer.innerHTML = data;
    
            continueButton = popupContainer.querySelector('.continue-button');
    
            // Check if the continue button already has the event listener attached
            if (!continueButton.hasAttribute('data-event-listener')) {
                console.log("Attaching event listener to the Continue button");
                continueButton.addEventListener('click', handleButtonClick);
                continueButton.setAttribute('data-event-listener', 'true'); // Set attribute to indicate event listener attached
            }
    
            document.body.appendChild(popupContainer);
    
            // Set focus on the continue button
            continueButton.focus();
    
            // Disable focus on the body element
            document.body.setAttribute('tabindex', '-1');
    
            console.log('Popup opened:', popupContainer);
            console.log('Currently focused element:', document.activeElement);
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
    
    // Restore focus on the body element
    document.body.removeAttribute('tabindex');
}

function handleButtonClick() {
  console.log("HandleButtonClick function called.");
  console.log("Continue button clicked!");
  closePopup();
}
