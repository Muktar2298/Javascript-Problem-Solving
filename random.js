// let x = 1;
// console.log(Math.random(x) * 10);

// let x = 2.594;
// let randomNumber = Math.random(x) * 6;
// let randomInt = Math.round(randomNumber);
// // console.log(randomInt);

// //---10 times --//
// for (let i = 1; i <= 10; i++) {
//   let random = Math.random(x) * 6;
//   let randomInt = Math.round(random);
//   console.log(randomInt);
// }

// --random number input from user --//

function randomNumber(n) {
  let x = 2.5;
  for (let i = 1; i <= n; i++) {
    let random = Math.random(x) * 10;
    let randomInt = Math.round(random);
    console.log(randomInt);
  }
}
randomNumber(10);
