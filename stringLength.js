let sentence = "I'm a Front-End Developer.I want to become a Full-Stack Web Developer. ";
// console.log(sentence.length);
// console.log(sentence[1]);
let count = 0;
for (var i = 0; i < sentence.length; i++){
    const element = sentence[i];
    // console.log(element);
    if( element == " "){
        count++;   
    }
}
console.log(count);