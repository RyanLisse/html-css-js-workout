const borderElement = document.querySelector(".box");
const colors = ["red", "blue", "green", "yellow"];

setInterval(() => {
  const newBorderColor = colors[Math.floor(Math.random() * colors.length)];
  borderElement.style.borderColor = newBorderColor;
}, 3000);
