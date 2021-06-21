function kiloToMeter(kilo) {
  if (kilo < 0) {
    return "Sorry!!Enter a Positive Number";
  } else if (kilo == 0) {
    return Kilo;
  } else {
    let meter = kilo * 1000;
    // meter = Math.tofixed(3);
    return meter;
  }
}
let result = kiloToMeter(-10);
console.log(result);
