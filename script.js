function makeBubble() {
  let clutter = "";
  for (let i = 0; i < 227; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".panel-btm").innerHTML = clutter;
}

function timercnt() {
  let timer = 60;
  const timerDisplay = document.querySelector("#time");
  const countdown = setInterval(() => {
    if (timer > 0) {
      timerDisplay.textContent = timer;
      timer--;
    } else {
      timerDisplay.textContent = timer;
      clearInterval(countdown);
      document.querySelector("#hit").textContent = "";
      document.querySelector(
        ".panel-btm"
      ).innerHTML = `<h1>Game over. Points Scored: ${score}</h1>
      <button id="btn" onclick="startGame()">Start Game</button>`;
    }
  }, 1000);
}

function increaseScore(s) {
  score += s;
  if (score < 0) score = 0;
  document.querySelector("#score").textContent = score;
}

function hitcheck() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

document.querySelector(".panel-btm").addEventListener("click", (e) => {
  if (e.target.classList.contains("bubble")) {
    if (hitrn === parseInt(e.target.textContent)) {
      increaseScore(10);
      makeBubble();
      hitcheck();
    } else {
      increaseScore(-5);
    }
  }
});

let score = 0;
let hitrn = 0;

function startGame() {
  score = 0; //score is reset
  document.querySelector("#score").textContent = score;
  makeBubble();
  hitcheck();
  timercnt();
}
