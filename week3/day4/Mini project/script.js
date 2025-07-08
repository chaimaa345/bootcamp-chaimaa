// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const signIn = document.getElementById("signInButton");
  const signUp = document.getElementById("signUpButton");

  const signInForm = document.querySelector(".sign-in-form");
  const signUpForm = document.querySelector(".sign-up-form");
  const overlayContainer = document.querySelector(".overlay-container");
  const overlay = document.querySelector(".overlay");

  signIn.addEventListener("click", () => {
    overlayContainer.style.transform = "translateX(100%)";
    overlay.style.transform = "translateX(-50%)";
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
  });

  signUp.addEventListener("click", () => {
    overlayContainer.style.transform = "translateX(0)";
    overlay.style.transform = "translateX(0)";
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
  });
});
