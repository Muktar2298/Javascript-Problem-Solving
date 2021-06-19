//--iterative way to find the factorial of a number --//
function factorial(number) {
  let count = 1;
  for (var i = 1; i <= number; i++) {
    count = count * i;
  }
  return count;
}
let count = factorial(10);
console.log(count);



// --Using Recursion functions to find the factorial of a number --//
// 10! = 1*2*3*4*5*6*7*8*9*10
// 10! = 9!*10
// n!= n!*n
// n1!= (n -n) * n
function factorialNumber(num) {
    if(num == 0 ){
        return 1;         //--0 factorial is 1 --//
    }
    else{
        return num * factorialNumber(num - 1);
    }
}
let result = factorialNumber(10);
console.log(result);

