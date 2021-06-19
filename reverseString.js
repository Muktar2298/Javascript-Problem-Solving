let statement = "I'm a web developer!";
let reverse = "";
for (let i = 0; i < statement.length; i++) {
    const element = statement[i];
    reverse  = element + reverse;  
}
console.log(reverse);