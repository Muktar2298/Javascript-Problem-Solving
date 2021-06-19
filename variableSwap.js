// --using temp variable --
let a = 10,
  b = 11,
  temp;

temp = a;
a = b;
b = temp;

console.log("a:", a, "b:", b);

//   --using mathmetical way --//
let x = 10,
  y = 11;
x = x + y;
y = x - y;
x = x - y;
console.log("x:", x, "y:", y);

// --using Destructure or javascript way --//
let p = 10,
  q = 11;
[p, q] = [q, p]; //--destructuring --//
console.log("p:", p, "q:", q);
