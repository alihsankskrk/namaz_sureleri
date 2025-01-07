const buttons = document.querySelectorAll(".sure-button");
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

let currentAudio = null;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audioSrc = button.getAttribute("data-audio");
    if (currentAudio !== audioSrc) {
      currentAudio = audioSrc;
      audioPlayer.src = currentAudio;
      audioPlayer.play();
    } else {
      audioPlayer.play();
    }
  });
});

playButton.addEventListener("click", () => {
  if (currentAudio) {
    audioPlayer.play();
  }
});

pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
});
