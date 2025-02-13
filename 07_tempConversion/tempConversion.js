const ftoc = function(numF) {
  let cAnswer = ((numF-32)* (5/9));
  if ((cAnswer - Math.floor(cAnswer)) !== 0){
    return Number(cAnswer.toFixed(1));
  }
  return cAnswer;
};

const ctof = function(numC) {
  let fAnswer = ((numC * (9/5)) + 32);
  if ((fAnswer - Math.floor(fAnswer)) !== 0){
    return Number(fAnswer.toFixed(1));
  }
  return fAnswer;
};

ftoc(100);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
