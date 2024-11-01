// Function to display a greeting message
function showGreeting() {
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerText = "Bonjour et bienvenue sur notre page!";
    messageDisplay.style.color = "green";
}

// Function to change the background color of the message display
function changeColor() {
    const messageDisplay = document.getElementById("messageDisplay");
    const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    messageDisplay.style.backgroundColor = randomColor;
    messageDisplay.innerText = "Couleur de fond modifiée!";
}

// Function to reset the message display
function reset() {
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerText = "";
    messageDisplay.style.backgroundColor = "#fff";
    messageDisplay.style.color = "black";
}
