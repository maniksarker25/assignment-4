// function mindGame(number){
//     if(typeof number !== 'number'){
//         return "Enter a valid number please:"
//     }
//     const multiplicationResult = number * 3;
//     const sumationResult = multiplicationResult + 10;
//     const divitionResult = sumationResult / 2;
//     const finalResult = divitionResult - 5;
//     return finalResult;

// }
// const output = mindGame(gthg);
// console.log(output);

function mindGame(number){
    if(typeof number !== 'number'){
        return 'Enter a valid number please'
    }
    const result = ((((number * 3) + 10) / 2) - 5);
    return result;
}
const myResult = mindGame(33);
console.log(myResult);