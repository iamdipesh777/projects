const audio = new Audio();
const plays = document.getElementsByClassName("plays");
const track = document.getElementsByTagName("li");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const progressBar = document.getElementById("progressBar");

let currentIndex = 0;

const loadtrack = (index) => {
  audio.src = track[index].getAttribute("data-src");
  audio.addEventListener("loadedmetadata", () => {
    progressBar.max = audio.duration;
  });
};

const playtrack = () => {
  audio.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
};

const pausetrack = () => {
  audio.pause();
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
};

const nextTrack = () => {
  currentIndex = (currentIndex + 1) % track.length;
  loadtrack(currentIndex);
  playtrack();
};

const previousTrack = () => {
  currentIndex = (currentIndex - 1 + track.length) % track.length;
  loadtrack(currentIndex);
  playtrack();
};

Array.from(track).forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    loadtrack(currentIndex);
    playtrack();
  });
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

loadtrack(currentIndex);
