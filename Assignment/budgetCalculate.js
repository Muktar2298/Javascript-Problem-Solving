function budgetCalculate(num) {
  if (num < 0) {
    return "Enter the valid number";
  } else {
    let watch = num * 50;
    let phone = num * 100;
    let laptop = num * 500;
    const total = watch + phone + laptop;
    return total;
  }
}
const result = budgetCalculate(10);
console.log(result);
