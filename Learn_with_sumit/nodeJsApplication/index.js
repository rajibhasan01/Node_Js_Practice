/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Rajib Hasan ( rajibhasan01 )
 * Date: 23/04/2022
 *
 */

// Dependencies 
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printAQuote = function printAQuote(){
    // GEt all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that positon in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indenfinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop(){
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();