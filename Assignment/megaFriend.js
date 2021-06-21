function megaFriend(array) {
  let lgth = 0;
  let longest;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > lgth) {
      longest = array[i];
    }
  }
  return longest;
}
let array = ["nishat", "nishat sarkar", "nishat hasan Muktar"];
const longesString = megaFriend(array);
console.log(longesString);
