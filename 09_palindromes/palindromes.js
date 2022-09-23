const palindromes = function (string) {
    let noPunctuationString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    noPunctuationString = noPunctuationString.replace(/\s/g, "");
    noPunctuationString = noPunctuationString.toLowerCase();
    let reversedString = reverseString(noPunctuationString);
    if (noPunctuationString === reversedString){
        return true;
    }
    return false;


};

function reverseString(string){
    if (string === ""){
        return "";
    }
    else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }

}

// Do not edit below this line
module.exports = palindromes;
