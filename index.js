function isPalindrome(word) {
  const cleanString = word.toLowerCase().replace(/[^a-z]/g, "");

  // Step 2: Check if the string is empty or has only one character.
  if (cleanString.length <= 1) {
    return true;
  }

  // Step 3: Compare the first and last characters of the string.
  if (cleanString[0] !== cleanString[cleanString.length - 1]) {
    return false;
  }

  // Step 4: Recursively call the function on the substring without the first and last characters.
  return isPalindrome(cleanString.substring(1, cleanString.length - 1));
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
