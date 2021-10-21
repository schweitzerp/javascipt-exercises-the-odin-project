const add = function(a, b) {
	  return a + b;
};

const subtract = function(a, b) {
	  return a -b;
};

const sum = function(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
};

const multiply = function(array) {
    let multiplyResult =  array[0];
    for (let i = 1; i < array.length; i++){
        multiplyResult *= array[i];
    }
    return multiplyResult;
};

const power = function(a, b) {
	  let powerResult = a;
    for (let i = 1; i < b; i++){
        powerResult *= a;
    }
    return powerResult;
};

const factorial = function(a) {
    let factorial = 1
    for (let i = a; i > 1; i--){
        factorial *= i;
    }
    return factorial;
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
