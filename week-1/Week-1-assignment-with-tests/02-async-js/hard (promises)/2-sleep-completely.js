/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
    // Continue looping until the specified time has elapsed
    console.log("Inner func");
  }
  console.log("outer func");
}
sleep(2);
