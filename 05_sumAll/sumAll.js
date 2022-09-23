const sumAll = function(num1, num2) {
    if ((num1 < 0) || 
        (num2 < 0) ||
        (typeof(num1) != "number") || 
        (typeof(num2)!= "number")){
        return "ERROR";
    }
    if(num1 < num2){ 
        let sum = num1;
        for (i = num1; i < num2; i++){
            sum += i + 1;
        }
        return sum;
    }   
    if(num2 < num1){
        let sum = num2;
        for (i = num2; i < num1; i++){
            sum += i + 1;
        }
        return sum;
    }
    else {
        sum = num1 + num2; 
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
