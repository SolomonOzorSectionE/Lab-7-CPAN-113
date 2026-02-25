const hoverBtn = document.getElementById("hoverBtn");
const mouseMsg = document.getElementById("mouseMsg");

hoverBtn.addEventListener("mouseenter", () => {
  mouseMsg.textContent = "MOUSE IS ON THE BUTTON I REPEAT, THE MOUSE IS ON THE BUTTON.";
});

hoverBtn.addEventListener("mouseleave", () => {
  mouseMsg.textContent = "MOUSE IS NOT ON THE BUTTON ANYMORE, I REPEAT, THE MOUSE IS NOT ON THE BUTTON ANYMORE.";
});

const keyInput = document.getElementById("keyInput");
const keyMsg = document.getElementById("keyMsg");

keyInput.addEventListener("keydown", (event) => {
  keyMsg.textContent = "Last key pressed: " + event.key;
});


demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMsg.textContent = "Form submitted!";
});
