const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const surpriseDiv = document.getElementById('surprise');
const backgroundMusic = document.getElementById('background-music');
const sparklesContainer = document.querySelector('.sparkles-container');
const messageContainer = document.getElementById('message');

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

// Function for typewriter effect with support for HTML (e.g., <br>)
function typeWriter(text, element, callback) {
    let i = 0;
    const speed = 100; // Type speed in milliseconds
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            callback(); // Call the callback function after typing finishes
        }
    }
    type();
}

// Handle "No" button click for mouse and touch events
function handleNoButtonClick() {
    // Perform an action, like redirecting to another page or doing something else
    // Note: The button won't be clickable with mouse anymore but will still work with touch
    window.location.href = "https://www.example.com";  // Example: Redirect to another URL
}

// Adding both touch and mouse event listeners for the "No" button
noButton.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default mouse click behavior
});  // For mouse click, it won't work (does nothing)

noButton.addEventListener('touchend', (event) => {
    event.preventDefault();  // Prevent default behavior (scrolling, zooming, etc.)
    handleNoButtonClick();   // Handle the touch event (this will still work)
});

// Event listeners for the "No" button to move it randomly when hovered or touched
function moveNoButtonRandomly() {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate the available space for the button to move
    const maxX = containerRect.width - buttonRect.width - yesButton.offsetWidth; // Prevent overlap with "Yes" button
    const maxY = containerRect.height - buttonRect.height;

    // Adjust for mobile responsiveness by considering smaller screen sizes
    const maxWidth = Math.min(window.innerWidth, maxX);
    const maxHeight = Math.min(window.innerHeight, maxY);

    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;

    noButton.style.transition = 'left 0.2s, top 0.2s'; // Smooth transition for movement
    noButton.style.position = 'absolute';  // Ensure absolute positioning
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Add event listeners for mouse hover and touch to move the "No" button randomly
noButton.addEventListener('mouseover', moveNoButtonRandomly); // For mouse hover
noButton.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default behavior (scrolling, zooming, etc.)
    moveNoButtonRandomly();  // Handle touch event to move the button
});

// Event listener for "Yes" button click
yesButton.addEventListener('click', () => {
    // Hide the buttons
    noButton.style.display = 'none';
    yesButton.style.display = 'none';

    // Show surprise content
    surpriseDiv.classList.remove('hidden');
    backgroundMusic.play();
    createSparkles(); // Add sparkles

    // Type out the first message with line breaks
    const firstMessage = `HI Rollyn, Ms Belle, MARYAFEEE GOODMORNING 1:45 NA EE HAHAHA😂`;
    typeWriter(firstMessage, messageContainer, () => {
        // After first message finishes, type the second message
        const secondMessage = `<br>Hi ROllyn tinapos ko tlaga to para wala lang para sabihin sayo na Gusto Tlaga kitaaaaa anong magagawa ko ee nahulog na tlaga ako sayooo HAHAHA
        basta i still admiring you no matter what happens, pero sabi mo hanggang kaibigan lang muna edi Go ako HAHAHA, pero malay mo meron ng
        kunting spark jan so anong malay ko anong malay natin dba??HAHA😂 tsaka pag nagkita tayo ulit wag mo naman ako saksakin baka madedz agad ako nyaaan
        HAHAHA Ayun lang pasensya kana huh?? nagintay ka ng matagal tas wala din pala, ang dami kasing error sa uploading ng files at codes HAHAHA pero natapos ko naman so Ayun sinend ko na din 
        Ayun lang napuyat kapa tuloy ng kaunti HAHAHAHA sorry!!?. AND ANDITO LANG AKO PALAGI AWAN NA LAANG KUNG DMO PA AKO MAGING PALAGI NYAN HAHAHA!!. GOODNIGHT🫶`;

        // Ensure the second message is below the first one
        typeWriter(secondMessage, messageContainer, () => {
            // Add margin to the message container after typing finishes
            messageContainer.style.margin = '0 20px'; // Add margin to both sides of the message
            // Ensure the page is scrollable to view the full message
            document.body.style.overflowY = 'scroll'; // Enable scrolling
        });
    });

    // Initially allow the page to be scrollable when the message is long
    document.body.style.overflowY = 'scroll'; // Enable scrolling
});
