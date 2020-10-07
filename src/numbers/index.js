const isEven = (num) => {
  // write code for numbers.isEven

  //Since we want to check if the number is even we can check if the
  if (num % 2 == 0) {
    console.log(num + " is even");
    return true;
  }
  console.log(num + " is odd");
  return false;
};

const sum = (arr) => {
  // write code for numbers.sum

  // create a function that will be the call back in our reduce methode below. Have it add the current value to the next value till it runs out of next value
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return arr.reduce(reducer);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

  // create a function that will be the call back in our reduce methode below. Have it add the current value to the next value till it runs out of next value
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const newArr = arr.reduce(reducer);
  // check if the array is equal to the sum return false if not.
  return newArr == sum ? true : false
 
  
};

module.exports = {
  isEven,
  sum,
  comboSum
}