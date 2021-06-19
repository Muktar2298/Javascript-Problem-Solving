// let number = [1,2,2,3,4,5,6,7,7,8,8,9,9,10,10];
// let removeDuplicteNumber =[];

// for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     let index = removeDuplicteNumber.indexOf(element);
//     if(index == -1){                           //-- ( -1) mane element nai--//
//         removeDuplicteNumber.push(element);
//     }
    
// }
// console.log(removeDuplicteNumber);




// ---remove duplicate element --//
let names = ["rubel","rubel","muktar","nishat",'saiful',"nishat",'masud','arif',"saiful"];
let removeDuplicteName = [];

for (let i = 0; i < names.length; i++) {
    let element = names[i];
    let index = removeDuplicteName.indexOf(element);
    if( index !== -1)  {
        removeDuplicteName.push(element);
    }
    
}
console.log(removeDuplicteName);