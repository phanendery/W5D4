Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length;i++)
    {
       callback(this[i]);
    }
}   


Array.prototype.myMap = function (callback) {
    let arr = [];
    function ourCallback(ele) {
        arr.push(callback(ele));
    }
    this.myEach(ourCallback);
    // this.myEach((el) => arr.push(callback(el)));
    return arr;
}   

Array.prototype.myReduce = function (cb,initValue) {
    let acc = 0;
    if (initValue)
    {
        acc += initValue;
    }
   
    function ourCallback(ele){
        acc = cb(acc,ele)
    }

    this.myEach(ourCallback);

    return acc;
}   