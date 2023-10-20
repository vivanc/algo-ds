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
// different machine will result different time so use counts of simple operations (+, -, /, *)
