const removeFromArray = function(arr,...args) {
    const newArr=[]
    for(const a of arr){
        if(!args.includes(a)){
            newArr.push(a);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
