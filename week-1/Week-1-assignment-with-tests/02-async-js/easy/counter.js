// with set interval
class CounterWithSetInterval {
  constructor() {
    this.count = 0;
    this.intervalId = null;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.increment();
    }, 1000);
  }
  increment() {
    this.count += 1;
    console.log(this.count);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  reset() {
    this.count = 0;
  }
}

const counter = new CounterWithSetInterval();

// counter.start(); // Start the counter

// Wait for 5 seconds
// setTimeout(() => {
//   counter.stop(); // Stop the counter
// }, 5000);

// without set interval

class CounterWithOutSetInterval {
  constructor() {
    this.count = 0;
    this.timeId = null;
  }
  start() {
    this.timeId = setTimeout(() => {
      this.increment();
      this.start();
    }, 1000);
  }
  increment() {
    this.count += 1;
    console.log(this.count);
  }
  stop() {
    clearInterval(this.timeId);
    this.timeId = null;
  }
  reset() {
    this.count = 0;
  }
}

const counterWithSetInterval = new CounterWithOutSetInterval();

counterWithSetInterval.start(); // Start the counter

// Wait for 5 seconds
setTimeout(() => {
  counterWithSetInterval.stop(); // Stop the counter
}, 5000);
