/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // const reversStr = str
  //   .split("")
  //   .reverse()
  //   .join("")
  //   .toLowerCase()
  //   .replace(/ /g, "");
  // console.log({
  //   str: str
  //     .toLowerCase()
  //     .replace(/ /g, "")
  //     .replace(/[&\/\\#, +()$~%.'":*?<>{}!]/g, ""),
  //   reversStr: reversStr.replace(/[&\/\\#, +()$~%.'":*?<>{}!]/g, ""),
  // });
  // if (
  //   str
  //     .toLowerCase()
  //     .replace(/ /g, "")
  //     .replace(/[&\/\\#, +()$~%.'":*?<>{}!]/g, "") ===
  //   reversStr.replace(/[&\/\\#, +()$~%.'":*?<>{}!]/g, "")
  // ) {
  //   return true;
  // }
  // return false;
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
