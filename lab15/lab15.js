var timer1 = null;
var el = null;
var score = 0;
var shots = 0;
var direction = 1;

function moveIt() {
  var xPosition = parseInt(el.style.left);
  var yPosition = parseInt(el.style.top);

  if (direction === 1) {
    if (xPosition > screen.width - 50) {
      direction = -1;
    }
    el.style.left = xPosition + 24 + "px";
  } else {
    if (xPosition < 50) {
      direction = 1;
    }
    el.style.left = xPosition - 24 + "px";
  }

  el.style.top = 100 + 80 * Math.sin(xPosition / 50) + "px";

  timer1 = setTimeout(moveIt, 25);
}

function scoreUp() {
  score++;
}
function scoreboard() {
  document.getElementById("score").innerHTML =
    "Shots: " + shots + " Score: " + score;
}
window.onload = function () {
  el = document.getElementById("img1");
  el.onclick = scoreUp;
  document.getElementById("range").onclick = function () {
    shots++;
    scoreboard();
  };
  scoreboard();
  el.style.left = "50px";
  moveIt();
};
