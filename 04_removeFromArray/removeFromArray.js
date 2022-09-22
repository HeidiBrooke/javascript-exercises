

const removeFromArray = function(array, ...items) {
    let indexLog = [];
    let indexHolder = [];
    let doesHaveMatch = null;
    for (i = 0; i < items.length; i++){
        indexHolder = hasMatch(array, items[i]);
        if (doesHaveMatch != indexHolder){
        indexLog.push(indexHolder);
        }
    }
    if (indexLog.length < 1){
        return array;
     }
    return createArraySansMatches(array, indexLog);
    
};

function hasMatch(compareArray, item) {
   
    let spliceIndex = [];
    for(j = 0; j < compareArray.length; j++){
        if (item === compareArray[j]){   
            spliceIndex.push(j); 
        }
    }
    if (spliceIndex.length < 1) {
        return null;
    }
    return spliceIndex; 
}

function spliceArray(initialArray, splicerArray){
    for(k = 0; k < splicerArray.length;){
        initialArray.splice(splicerArray[k],1);
        splicerArray.shift();
        splicerArray.forEach(subtract1);
    }
    return initialArray;
}

function subtract1(num, index, arr){
    arr[index] = num - 1;
}

function createArraySansMatches(initArr, spliceArr){
    let finalArray = [];
    for (l = 0; l < spliceArr.length; l++){
        let index = spliceArr[l];
        initArr[index] = null;
    }
    for (m = 0; m < initArr.length; m++){
        if (initArr[m] != null){
            finalArray.push(initArr[m]);
        }
    }
    return finalArray;
}
// Do not edit below this line
module.exports = removeFromArray;
