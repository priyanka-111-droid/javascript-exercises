const repeatString = function(string,num) {
    let x="";
    for(let i=1;i<=num;i++){
        x+=string;
    }
    return num>=0?x:'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
