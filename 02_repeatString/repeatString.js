const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    let stringHolder = "";
    for (i = 0; i < num; i++){
        stringHolder += string;
    }
    return stringHolder

};

// Do not edit below this line
module.exports = repeatString;
