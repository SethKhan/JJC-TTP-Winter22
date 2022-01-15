// Seth Khan - FizzBizz Puzzle - 2022 JJAY TTP Bootcamp
// Declare function fizzbuzz().
function fizzbuzz() {

    // For loop which itterates from 0 to 100. 
    for(var i = 0; i <= 100; i++) {
        // Conditional which will separate numbers and output "FizzBuzz" if i evenly divides by 3 and 5 .
        if((i%3) === 0 && (i%5) === 0 ) {
            console.log("FizzBuzz");
        //Conditional which will separate numbers and output "Fizz" ONLY if i evenly divides by 3.
        }else if((i%3) === 0) {
            console.log("Fizz");
        //Conditional which will separate numbers and output "Buzz" ONLY if i evenly divides by 5.
        }else if((i%5) === 0) {
            console.log("Buzz");
        // Conditional which outputs the rest of i not divisible by 3 or 5.
        }else{
            console.log(i);
        }
    }
}

fizzbuzz();

/*
Credit: 
https://www.w3schools.com/jsref/met_console_log.asp
https://www.javatpoint.com/how-to-call-javascript-function-in-html
*/
