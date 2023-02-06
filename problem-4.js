function findingBadData(age){
    if(Array.isArray(age) == false){
        return 'Please enter a valid array '
    }
    let count = 0;
    for(let i = 0; i < age.length; i++){
        const element = age[i];
        if(element < 0){
            count = count + 1;
        }
        
    }
    return count;
    
}
const result = findingBadData(54);
console.log(result);