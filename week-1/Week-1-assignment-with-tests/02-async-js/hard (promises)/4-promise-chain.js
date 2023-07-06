/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("one sec");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("two sec");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("three sec");
      resolve();
    }, 3000);
  });
}

async function calculateTime() {
  const startDate = new Date();
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  const endDate = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  console.log(`All Function is resolved in ${seconds} seconds`);
}
calculateTime();
