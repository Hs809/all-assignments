class Clock {
  constructor() {
    this.time = new Date();
    this.intervalId = null;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.showTime();
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  showTime() {
    this.time = new Date();
    console.log(
      this.time.getHours() +
        ":" +
        this.time.getMinutes() +
        ":" +
        this.time.getSeconds()
    );
  }
}
const timer = new Clock();
timer.start(); // Start the counter

// Wait for 5 seconds
// setTimeout(() => {
//   timer.stop(); // Stop the counter
// }, 5000);
