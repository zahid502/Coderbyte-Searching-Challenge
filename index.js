//Coderbyte Searching Challenge in JavaScript

function SearchingChallenge(str) {
  const words = str.split(" ");
  let maxRepeatedLetters = 0;
  let wordWithMaxRepeatedLetters = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const letterCounts = {};
    let repeatedLetters = 0;

    for (let j = 0; j < word.length; j++) {
      const letter = word[j].toLowerCase(); // Convert letter to lowercase for case-insensitive comparison

      if (/[a-z]/i.test(letter)) {
        if (letter in letterCounts) {
          letterCounts[letter]++;
          if (letterCounts[letter] === 2) {
            repeatedLetters++;
          }
        } else {
          letterCounts[letter] = 1;
        }
      }
    }

    if (repeatedLetters > maxRepeatedLetters) {
      maxRepeatedLetters = repeatedLetters;
      wordWithMaxRepeatedLetters = word;
    }
  }

  if (maxRepeatedLetters === 0) {
    return -1;
  } else {
    let finalOutput = wordWithMaxRepeatedLetters
      .split("")
      .filter((char) => !/i|q|b|o|l|p|g|3|j|1|7|4/i.test(char))
      .join("");

    if (finalOutput === "") {
      return "EMPTY";
    } else {
      return finalOutput;
    }
  }
}

console.log(SearchingChallenge("Hello apple pie"));
// Output: Hello
// Final Output: He

console.log(SearchingChallenge("No words"));
// Output: -1
// Final Output: -
