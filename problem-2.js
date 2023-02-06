function evenOdd(string){
    if(typeof string !== 'string'){
        return 'Please enter a valid string '
    }
    if(string.length % 2 == 0){
        return 'even';

    }
    else{
        return 'odd';
    }
}
const evenOrOdd = evenOdd(25);
console.log(evenOrOdd);