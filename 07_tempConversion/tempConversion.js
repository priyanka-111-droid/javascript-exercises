const ftoc = function(fah) {
  let ans = (fah-32)*5/9;
  return Math.round((ans*10))/10;
};

const ctof = function(cel) {
  let ans = (cel*9/5)+32;
  return Math.round((ans*10))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
