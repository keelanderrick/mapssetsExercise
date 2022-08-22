new Set([1,1,2,2,3,4]) // returns {1,2,3,4}

// [...new Set("referee")].join("") // returns "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/* 
0: {Array(3) => true}
1: {Array(1) => false}
*/

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// checks for duplicates by making a set from an array and comparing the size of set to the length of the array
const hasDuplicate = arr => new Set(arr).size !== arr.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// counts vowels by using a map
function vowelCount(str) {
  const vowels = 'aeiou';
  const result = new Map();
  str.toLowerCase().split("").forEach(function(value) {
    if(vowels.includes(value)) {
      if(result.has(value))
        result.set(value, result.get(value) + 1)
      else
        result.set(value, 1);
    }
  })
  return result;
}

console.log(vowelCount("aabcdeeefghioiuuuuui"))