function inchToFeet(inch) {
  let feet = inch / 12;
  return feet;
}

let result = inchToFeet(1004);
console.log("Feet:", result);

// --meterToMelemeter --//
function meterToMelemeter(meter) {
  let melemeter = meter * 1000;
  console.log("Melemeter:", melemeter);
}

meterToMelemeter(5);

// --if negative input --//
function meterToMelemeter(meter) {
  if (meter > 0) {
    let melemeter = meter * 1000;
    console.log("Melemeter:", melemeter);
  } else {
    console.log("Meter cann't be negative");
  }
}

meterToMelemeter(5);
