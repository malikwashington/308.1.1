// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Part 2
//

const MPG = [30, 28, 23];
const MPH = [55,60,75];

const gallonsAt55MPH = 1500 / 30;
const gallonsAt60MPH = 1500 / 28;
const gallonsAt75MPH = 1500 / 23;

const costAt55MPH = 1500 * 3 / 30;
const costAt60MPH = 1500 * 3 / 28;
const costAt75MPH = 1500 * 3 / 23;

const budget = 175;

const enough = [costAt55MPH, costAt60MPH, costAt75MPH].map(e=>e<=budget);

const lengthOfTrip = enough.map((e, i)=> e? Math.round(1500/MPH[i]) : "this trip is out of budget.");

let res = ''

for(const [i, e] of enough.entries()){
        res += `at ${MPH[+i]} MPH, ${e? `this trip will take ${lengthOfTrip[+i]} hours.` : lengthOfTrip[+i]} \n`;
}

console.log(res);
