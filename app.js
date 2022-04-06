const diamond = new Freezeframe('#diamond', {
  trigger: false,
});

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const timeDisplay = document.getElementById('time-display');

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / (60 * 60));
  let mins = Math.floor((seconds - hrs * (60 * 60)) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;
  if (hrs < 10) hrs = '0' + hrs;

  timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  if (interval) {
    return;
  }
  diamond.start();
  interval = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
  diamond.stop();
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  timeDisplay.innerText = '00:00:00';
}
