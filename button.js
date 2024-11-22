const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const surpriseDiv = document.getElementById('surprise');
const backgroundMusic = document.getElementById('background-music');
const sparklesContainer = document.querySelector('.sparkles-container');

// Function to create heart-shaped sparkles
function createSparkles() {
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Random positions across the screen
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;

        // Random size for each sparkle
        const size = Math.random() * 15 + 5;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        // Set the heart shape using pseudo-element
        sparkle.style.transform = "rotate(45deg)"; // Make it a diamond shape
        sparkle.style.backgroundColor = "red"; // Set red color

        // Append sparkle to the sparkles container
        sparklesContainer.appendChild(sparkle);

        // Remove after animation ends
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

// Event listeners
noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.transition = 'left 0.2s, top 0.2s'; // Smooth transition for movement
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

yesButton.addEventListener('click', () => {
    surpriseDiv.classList.remove('hidden');
    backgroundMusic.play();
    createSparkles(); // Add sparkles
});
