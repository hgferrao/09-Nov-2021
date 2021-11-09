/*
// Oddish vs. Evenish

function oddishOrEvenish(num) {
  const sum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((start, end) => start + end, 0);
  return sum % 2 === 0 ? "Evenish" : "Oddish";
  console.log(sum);
  // return num;
}
console.log(oddishOrEvenish(43)); //, "Oddish");
console.log(oddishOrEvenish(373)); //, "Oddish");
console.log(oddishOrEvenish(55551)); //, "Oddish");
console.log(oddishOrEvenish(694)); //, "Oddish");
console.log(oddishOrEvenish(4433)); //, "Evenish");
console.log(oddishOrEvenish(11)); //, "Evenish");
console.log(oddishOrEvenish(211112)); //, "Evenish");


// Disarium Number

function isDisarium(n) {
  let num = n;
  let arr = num.toString().split("").map(Number);
  // console.log(arr);
  let power = arr
    .map((a, i) => Math.pow(a, i + 1))
    .reduce((acc, element) => acc + element, 0);
  return num === power ? true : false;
}

console.log(isDisarium(75)); //➞ false
// 7^1 + 5^2 = 7 + 25 = 32
console.log(isDisarium(135)); // ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
console.log(isDisarium(518)); // ➞ true
console.log(isDisarium(544)); // ➞ false
console.log(isDisarium(8)); //➞ true
console.log(isDisarium(466)); // ➞ false
// let [numVector, resVector] = [
//   [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
//   [true, false, true, false, false, true, true, false, false, true, true, true]
// ]
// for (let i in numVector) Test.assertEquals(isDisarium(numVector[i]), resVector[i])
*/

// Frequency Distribution

function getFrequencies(arr) {
  return arr.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
}

console.log(getFrequencies([2, 1, 3, 3, 2, 3])); // { '1': 1, '2': 2, '3': 3 }
console.log(getFrequencies(["a", "b", "a", "c", "a", "b"])); // { 'a': 3, 'b': 2, 'c': 1 }
console.log(getFrequencies(["A", "A"])); //, {A: 2})
console.log(getFrequencies(["A", "B", "A", "A", "A"])); //, {A: 4, B: 1})
console.log(getFrequencies(["A", "B", "C", "A", "A"])); //, {A: 3, B: 1, C: 1})
console.log(getFrequencies([true, false, true, false, false])); //, {'true': 2, 'false': 3})
console.log(getFrequencies([1, 2, 3, 3, 2])); //, {'1': 1, '2': 2, '3': 2})
console.log(getFrequencies([])); //, {})
