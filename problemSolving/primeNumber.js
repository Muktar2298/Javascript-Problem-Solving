function checkPrimeNumber(number) {
  if (number > 0) {
    for (let i = 2; i < 10; i++) {
      if (number % i == 0) {
        return "Not a Prime Number";
      } else {
        return "Prime Number";
      }
    }
  } else {
    return "Enter a Positve Number";
  }
}

let primeNumber = checkPrimeNumber(-10);
console.log(primeNumber);
