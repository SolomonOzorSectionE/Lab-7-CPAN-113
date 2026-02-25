const hoverBtn = document.getElementById("hoverBtn");
const mouseMsg = document.getElementById("mouseMsg");

hoverBtn.addEventListener("mouseenter", () => {
  mouseMsg.textContent = "MOUSE IS ON THE BUTTON I REPEAT, THE MOUSE IS ON THE BUTTON.";
});

hoverBtn.addEventListener("mouseleave", () => {
  mouseMsg.textContent = "MOUSE IS NOT ON THE BUTTON ANYMORE, I REPEAT, THE MOUSE IS NOT ON THE BUTTON ANYMORE.";
});
