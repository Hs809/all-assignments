/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((res) => {
      const endDate = new Date();
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      console.log(`All Promised is resolved in ${seconds} seconds`);
    })
    .catch((error) => {
      console.error(error);
    });
}
calculateTime();
