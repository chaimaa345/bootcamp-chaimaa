function playSound(e) {
  const keyCode =
    e.type === "keydown" ? e.keyCode : e.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", playSound);
  key.addEventListener("transitionend", removeTransition);
});


