"use strict";

document.querySelectorAll(".playback-controls[data-video]").forEach((controls) => {
  const video = document.getElementById(controls.dataset.video);
  if (!(video instanceof HTMLVideoElement)) return;

  const buttons = controls.querySelectorAll("button[data-rate]");
  const updateSelectedSpeed = () => {
    buttons.forEach((button) => {
      const selected = Number(button.dataset.rate) === video.playbackRate;
      button.setAttribute("aria-pressed", String(selected));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      video.playbackRate = Number(button.dataset.rate);
      updateSelectedSpeed();
    });
  });

  video.defaultPlaybackRate = 1;
  video.playbackRate = 1;
  video.addEventListener("ratechange", updateSelectedSpeed);
  updateSelectedSpeed();
  controls.hidden = false;
});
