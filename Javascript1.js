// Animasi interaktif
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button");
  const body = document.body;

  button.addEventListener("click", function() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.background = randomColor;
  });
});
