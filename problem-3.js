function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'Enter a valid number please';
    }
    const sumation = number - 7;
    if(sumation < 7){
        return sumation;
    }
    else{
        return number * 2;
    }


}
const result = isLGSeven(15);
console.log(result);