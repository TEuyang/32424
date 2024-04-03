// Function to generate random pastel color
function getRandomPastelColor() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = "hsl(" + hue + ", 100%, 85%)";
  return pastel;
}

// Function to move circles within the viewport
function moveCircles() {
  var circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle) {
    var circleRect = circle.getBoundingClientRect();
    var maxX = window.innerWidth - circleRect.width;
    var maxY = window.innerHeight - circleRect.height;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    circle.style.transition = "transform 2s ease-in-out";
    circle.style.transform = "translate(" + x + "px, " + y + "px)";
  });
}

// Function to toggle background color and text color
function toggleColors() {
  var body = document.body;
  var currentColor = window
    .getComputedStyle(body)
    .getPropertyValue("background-color");
  if (currentColor === "rgb(0, 0, 0)" || currentColor === "#000") {
    body.style.backgroundColor = "white";
    document.getElementById("bodytext").style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    document.getElementById("bodytext").style.color = "white";
  }
}

// Function to move a button within the viewport
function moveButton(button) {
  var buttonRect = button.getBoundingClientRect();
  var maxX = window.innerWidth - buttonRect.width;
  var maxY = window.innerHeight - buttonRect.height;

  var x = Math.random() * maxX;
  var y = Math.random() * maxY;

  button.style.transform = "translate(" + x + "px, " + y + "px)";
}

// Function to toggle button size
function toggleButtonSize() {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    var currentWidth = parseFloat(button.style.width);
    var currentHeight = parseFloat(button.style.height);
    var newWidth = currentWidth === 50 ? 70 : 50;
    var newHeight = currentHeight === 50 ? 70 : 50;
    button.style.width = newWidth + "px";
    button.style.height = newHeight + "px";
  });
}
// Create and style button container
var buttonContainer = document.querySelector(".button-container");
buttonContainer.style.display = "flex";
buttonContainer.style.flexWrap = "wrap";
buttonContainer.style.justifyContent = "space-around";
buttonContainer.style.marginTop = "20px";

// Create and style change color button
var changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", function () {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = getRandomPastelColor();
  });
});

// Create and style change background color button
var changeBgColorBtn = document.getElementById("changeBgColorBtn");
changeBgColorBtn.addEventListener("click", toggleColors);

// Create and style toggle button size button
var toggleSizeBtn = document.getElementById("toggleSizeBtn");
toggleSizeBtn.addEventListener("click", toggleButtonSize);

// Create buttons and add click event listener to move them
for (var i = 0; i < 30; i++) {
  var button = document.createElement("button");
  button.className = "button";
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.margin = "5px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = getRandomPastelColor();
  button.addEventListener("click", function () {
    moveButton(this);
  });
  buttonContainer.appendChild(button);
}

// Create circles and move them
for (var i = 0; i < 5; i++) {
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.width = "30px";
  circle.style.height = "30px";
  circle.style.backgroundColor = getRandomPastelColor();
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.top = Math.random() * (window.innerHeight - 30) + "px";
  circle.style.left = Math.random() * (window.innerWidth - 30) + "px";
  document.body.appendChild(circle);
}

// Move circles every 2 seconds
setInterval(moveCircles, 2000);
