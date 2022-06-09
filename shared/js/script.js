$(function () {
  $("#header").load("shared/header.html", function () {
    const toggle = document.querySelector(".togglenav");
    const close = document.querySelector(".close");
    const content = document.querySelector("#content");
    const footer = document.querySelector("#footer");
    const navbar = document.querySelector(".navbar");
    toggle.addEventListener("click", () => {
      close.style.display = "block";
      toggle.style.display = "none";
      content.classList.add("display");
      footer.classList.add("display");

      navbar.classList.add("toggle");

      close.addEventListener("click", () => {
        close.style.display = "none";
        toggle.style.display = "block";
        content.classList.remove("display");
        footer.classList.remove("display");
        navbar.classList.remove("toggle");
      });
    });
  });

  $("#footer").load("shared/footer.html");
});

//play video

videoPlayer = document.querySelector(".video-wrapper");
video = videoPlayer.querySelector(".video");
playbtn = videoPlayer.querySelector("#play-btn");

playbtn.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
  } else {
    video.pause();
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
  }
});
