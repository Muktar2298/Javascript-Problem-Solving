// 5!=1*2*3*4*5               = >(4!*5)
// 5! = 5*4*3*2*1

// --Iterative --//
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
    // console.log(i, fact);
  }
  return fact;
}
let result = factorial(5);
console.log("IterativeResult:",result);

// --Recursion --//

function recursiveFactorial(number) {
  if (number == 1) {
    return 1;
  }
  return factorial(number - 1) * number;
}
let recursiveResult = recursiveFactorial(5);
console.log("RecursiveResult:",recursiveResult);

