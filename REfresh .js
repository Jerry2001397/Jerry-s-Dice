// This script works with REfesh.html to display two random dice images and show the winner

// Store player names
let player1Name = "Player 1";
let player2Name = "Player 2";

// Prompt for names when page loads
window.onload = function() {
  player1Name = prompt("Enter Player 1 Name:", "Player 1") || "Player 1";
  player2Name = prompt("Enter Player 2 Name:", "Player 2") || "Player 2";
  document.querySelectorAll(".dice p")[0].textContent = player1Name;
  document.querySelectorAll(".dice p")[1].textContent = player2Name;
};

function rollDice() {
  // Generate random numbers for each dice (1-6)
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Build image file paths
  var imageSource1 = "./Images/dice" + randomNumber1 + ".png";
  var imageSource2 = "./Images/dice" + randomNumber2 + ".png";

  // Set images
  document.querySelector(".img1").setAttribute("src", imageSource1);
  document.querySelector(".img2").setAttribute("src", imageSource2);

  // Winner logic
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").textContent = player1Name + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h3").textContent = player2Name + " Wins!";
  } else {
    document.querySelector("h3").textContent = "Draw!";
  }
}

// Attach event listener to button
document.getElementById("refreshBtn").addEventListener("click", rollDice);

  const menuBtn = document.getElementById('menuBtn');
  const menuBox = document.getElementById('menuBox');
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuBox.classList.toggle('show');
  });
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuBox.contains(e.target)) {
      menuBox.classList.remove('show');
    }
  });
  // Add this script to your HTML file, before </body>
const menuBt = document.querySelector('.menu-btn');
let colorIndex = 1;
menuBtn.addEventListener('click', function() {
  colorIndex = colorIndex % 4 + 1; // cycles 1-4
  menuBtn.className = 'menu-btn color' + colorIndex;
});
