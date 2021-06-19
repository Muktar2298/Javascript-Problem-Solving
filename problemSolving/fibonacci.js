// --iterative way or for loop--//
/* let fibo = [0, 1];
for (let n = 2; n <= 10; n++) {
  fibo[n] = fibo[n - 1] + fibo[n - 2];
}
console.log(fibo); */




/* // --iterative way or while loop--//
let fibo = [0,1];
let n = 2;
while ( n <= 10){
    fibo[n] = fibo[n - 1] + fibo[n - 2]
    n++;
}
console.log(fibo) */



// --useing function --//
/* function fibonacciSeries(x) {
  let fibonacci = [0, 1];
  for (let n = 2; n <= x; n++) {
    fibonacci[n] = fibonacci[n - 1] + fibonacci[n - 2];
  }
  return fibonacci;
}
let result = fibonacciSeries(14);
console.log(result); */



// --using Recursion Function --//


function fibonacciRecursive(n){
    if(n == 0){
        return 0; // --0 fibonacci is 0
    }
    else if(n == 1){
        return 1; // --1 fibonacci is 1;
    }
    else{
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  }
  let result = fibonacciRecursive(10);
  console.log(result);
  
  
  
  //--using Recursion Function --//
  function fibonacciSeriesRecursive(n) {
    if (n == 0) {
      return [0];
    } else if (n == 1) {
      return [0, 1];
    } else {
      let fibo = fibonacciSeriesRecursive(n - 1); // --if n = 2 dile as a input (2 -1 = 1) , => R 1 hole, fibo =  [0,1] ai arry take pabo amra.
      let nextFibo = fibo[n - 1] + fibo[n - 1];
      fibo.push(nextFibo); // --next fibo item take fibo array te inject kora.--//
      return fibo;
    }
  }
  let result = fibonacciSeriesRecursive(10);
  console.log(result);
  