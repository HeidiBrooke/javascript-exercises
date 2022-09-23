const add = function(a, b) {
  let addResult = a + b;
  return addResult;
	
};

const subtract = function(a, b) {
  let subtractResult = a - b;
  return subtractResult;
	
};

const sum = function(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
	
};

const multiply = function(arr) {
  let multiplyResult = 1;
  for (i = 0; i < arr.length; i++){
    multiplyResult *= arr[i];
  }
  return multiplyResult;

};

const power = function(a, b) {
  let powerResult = a ** b;
  return powerResult;
	
};

const factorial = function(num) {
  if ( num < 1 ) {
    return 1;
  }
  else if (num == 1){
    return 1;
  }
  else {
    return num * (factorial(num-1));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
