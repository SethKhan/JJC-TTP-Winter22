// Seth Khan - Reverse Words Puzzle

// Variable which holds my message.
var message = "Hello World"

// Function which reversese the order of the words after splitting them up.
function reverseWords(str) {
  // Empty string which will hold the reversed words.
  let reversed = "";

  // Split the message into words
  var words = message.split(" ");
  
  for (var i = 0; i < words.length - 1; i++) {
      words[i] += " ";
      /* Itterate through the message and set the last letter 
      as the first letter in the index then the next letter and so on. */
      for(let i = message.length-1; i >= 0; i--) {
        reversed += message[i];
      }
  }
  // Return the new string.
  return reversed;
}

// Output to the console
console.log(reverseWords(message))