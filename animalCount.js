/* --1.first 10 kilometer we can find 10 animal per kilometer,,,
2.second 10 kilometer (11 - 20) we can find  20 animal per kilometer ..
3.above 20 or more kilometer  (21 -infinity )  we can find 50 animal per kilometer..
=> Count the total animal..!!
*/

function animalCount(kilometer){
    let animal = 0;
    if(kilometer < 0){
        return "Enter the positive Number";
    }
    else if(kilometer == 0){
        return "There is no Animal in this area";
    }
    else{
        if(kilometer <= 10){
            let first10 = kilometer * 10;
            animal = first10;
        }
        else if(kilometer <= 20){
            let first10 = 10*10;
            let remaining = kilometer - 10;
            var second20 = remaining * 20;
            animal = first10 + second20;
        }
        else{
            let first10 = 10 * 10;
            let second20 = 10 * 20;
            let remaining = kilometer - 20;
            let thirdPart = remaining * 50;
            animal = first10 + second20 + thirdPart;
        }
    }
    return animal;
}
let animalCalculator = animalCount(25);
console.log(animalCalculator);