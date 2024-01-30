// script for modal pop-up
document.querySelector("#submit-btn").addEventListener("click", () => {
  const inputs = ["email", "username", "password", "confirm-password"];

  for (const inputId of inputs) {
    const input = document.getElementById(inputId);
    if (input.value.trim() === "") {
      return;
    }
  }

  const email = document.getElementById("email").value;
  if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
    return;
  }

  document.querySelector(".bg-modal").style.display = "flex";
  document.body.style.overflowY = "hidden";
});

document.querySelector(".close").addEventListener("click", close);
document.querySelector(".button").addEventListener("click", close);

function close() {
  document.querySelector(".bg-modal").style.display = "none";
  document.body.style.overflowY = "scroll";
  document.querySelector("#contactForm").reset();
}
