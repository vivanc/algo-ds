console.log("hello");

/* 
add 1 to n including n 
*/

// solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// to see answer
console.log(addUpTo(6));

// solution 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// to see anser
console.log(addUpTo2(100));

/* 
which one is better ? 
*/

// faster && less memory
// different machine will result different time
// so use counts of simple operations (+, -, /, *)

/* Big O notation = time complexity*/

// say we have a constant runtime = O(f(n)) = O(1) = big O of 1

/* space complexity */

// boolean, number is constant
// strings are n depending on how many characters you have

/* different complexities are there */

// O(n), O(n^2), O(n log n), O(log n), O(1)
// log is opposite of exponent
