function evenOdd(string){
    if(typeof string !== 'string'){
        return 'Enter a valid string please'
    }
    if(string.length % 2 == 0){
        return 'even';

    }
    else{
        return 'odd';
    }
}
const evenOrOdd = evenOdd('Batch7');
console.log(evenOrOdd);