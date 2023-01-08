const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let res = 0;
  arr.map(x => res += x);
  return res;
};

const multiply = function(arr) {  // Working with these tests but not good enough
  let res = 1;
  arr.map(x => res *= x);
  return res;
};

const power = function(a, b) {
  let res = 1
  for(let i = 0; i < b; i++) {
    res *= a;
  }
  return res;
};

const factorial = function(a) {
	if(a === 0) return 1;
  let res = 1;
  for(let i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
};


// console.log(sum([2,3,5]));
// console.log(sum([]));
// console.log(sum([2,3,-5]));

// console.log(multiply([2,4]));
// console.log(multiply([3,4]));
// console.log(multiply([0]));

// console.log(power(2,5));
// console.log(power(4,3));


// console.log(factorial(5));



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
