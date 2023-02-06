function gemsToDiamond(firstFriendGemsQuantity,secondFriendGemsQuantity,thirdFriendGemsQuantity){
    if(typeof firstFriendGemsQuantity !== 'number' || typeof secondFriendGemsQuantity !== 'number' || typeof thirdFriendGemsQuantity !== 'number' ){
        return 'Please enter valid number';
    }
    const firstFriendDiamond = firstFriendGemsQuantity * 21;
    const secondFriendDiamond = secondFriendGemsQuantity * 32;
    const thirdFriendDiamond = thirdFriendGemsQuantity * 43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(totalDiamond > 1000 * 2){
        remainingDiamond = totalDiamond - 2000;
        return remainingDiamond;
    }
    else{
        return totalDiamond;
    }

}
const result = gemsToDiamond(20,200,'50');
console.log(result);