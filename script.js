let timer = 60;
let score = 0;
let hitnum;

function newHit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitnum;
}
newHit();

function makeBubble() {
  let clutter = "";
  for (let i = 1; i < 85; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bubbleconsole").innerHTML = clutter;
}
makeBubble();

function runTimer() {
  let timeinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeinterval);
      document.querySelector(
        "#bubbleconsole"
      ).innerHTML = `<h1> YOUR SCORE IS ${score}</h1>`;
    }
  }, 1000);
}
runTimer();

function scoreUp() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document
  .querySelector("#gameconsole")
  .addEventListener("click", function (details) {
    let targetnum = Number(details.target.textContent);
    if (hitnum === targetnum) {
      scoreUp();
      makeBubble();
      newHit();
    }
  });
