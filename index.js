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

// Check if the about section exists
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const circleContainer = document.getElementById('circle-container');
    const paragraph = aboutSection.querySelector('p');
    const lines = paragraph.innerHTML.split('<br>');

    lines.forEach(line => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.innerText = line;
        circleContainer.appendChild(circle);
    });

    arrangeCirclesInCircle(circleContainer);
}

function arrangeCirclesInCircle(container) {
    const circles = container.querySelectorAll('.circle');
    const radius = 200; // Adjust radius as needed
    const angleStep = (2 * Math.PI) / circles.length;

    circles.forEach((circle, index) => {
        const angle = angleStep * index;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
}
