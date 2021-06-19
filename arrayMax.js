let number = [1, 222, 3, 4, 555, 6, 7, 50, 15, 98, 180, 30];
let maxValue = number[0];
for (let i = 0; i < number.length; i++) {
  let element = number[i];
  if (element > maxValue) {
    maxValue = element * 2;
  }
}
console.log("Highest Value is :", maxValue);



//   --using function ---//
// function arrayMax() {
//   for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     if (element > maxValue) {
//       maxValue = element;
//     }
//   }
//   console.log("Highest Value is :" ,maxValue);
// }
// arrayMax();
