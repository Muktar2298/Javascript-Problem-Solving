let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200, 350];
let sum = 0;

for (let i = 0; i < number.length; i++) {
  const element = number[i];
  sum = sum + element;
}
console.log(sum);

// --using function --//
let array = [10, 20, 30, 40, 50];
function getArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
  }
  return sum;
}
let result = getArraySum(array);
console.log("Sum of all array:", result);
let result2 = getArraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 200, 350]);
console.log("Sum of all array:", result2);
