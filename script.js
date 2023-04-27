setInterval(() => {
  const box = document.querySelector(".box");
  const colors = ["red", "blue", "green", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.borderColor = randomColor;
}, 3000);
