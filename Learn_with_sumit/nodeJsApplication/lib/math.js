/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Rajib Hasan ( rajibhasan01 )
 * Date: 23/04/2022
 *
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

// Export the library
module.exports = math;