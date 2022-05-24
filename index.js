// Selectors
const startBtn = document.getElementsByClassName("start");
const stopBtn = document.getElementsByClassName("stop");
const durationDisplay = document.getElementById("display");
// const timeInSeconds = document.getElementById("second");
// const timeInMinutes = document.getElementById("minute");
// const timeInHours = document.getElementById("hour");

// Main Object Oriented Function
function stopWatch() {
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;
  let running = false;

  return {
    start: function () {
      if (running) {
        throw new Error("Stopwatch is already running");
      }
      running = true;
      startTime = new Date().getTime();
      console.log("Started");
    },
    stop: function () {
      if (!running) {
        throw new Error("Stopwatch already stopped");
      }
      running = false;
      stopTime = new Date().getTime();
      duration = stopTime - startTime;
      console.log(`Watch stopped at ${duration} seconds`);
    },
    reset: function () {
      startTime = 0;
      stopTime = 0;
      duration = 0;
      running = false;
    },
  };
}

const myStopWatch = stopWatch();

// Start Stopwatch
for (let i = 0; i < startBtn.length; i++) {
  startBtn[i].addEventListener("click", function () {
    myStopWatch.start();
  });
}

// Stop Stopwatch
for (let i = 0; i < stopBtn.length; i++) {
  stopBtn[i].addEventListener("click", function () {
    myStopWatch.stop();
  });
}
