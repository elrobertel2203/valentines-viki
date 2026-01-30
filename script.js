const noBtn = document.getElementById("nu");
const yesBtn = document.getElementById("da");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yaaay! 💕 Știam eu 🥰";
});
