function findingBadData(age){
    
    let count = 0;
    for(let i = 0; i < age.length; i++){
        const element = age[i];
        if(element < 0){
            count = count + 1;
        }
        
    }
    return count;
    
}
const result = findingBadData([2,-5,-7,-13]);
console.log(result);