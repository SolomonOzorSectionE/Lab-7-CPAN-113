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



const focusInput = document.getElementById("focusInput");
const focusMsg = document.getElementById("focusMsg");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "Input finally locked in!";
});

focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "Input lost focus, but it was a good run!";
});
