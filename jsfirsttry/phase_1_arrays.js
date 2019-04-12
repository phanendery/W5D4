Array.prototype.myUniq = function() {

    let arrUniq = [];
    this.forEach(function(ele) {
        if (!arrUniq.includes(ele)) {
            arrUniq.push(ele);
        }
    } );
   return arrUniq; 
}

Array.prototype.myTwoSum = function(){

    let pairs = [];

    this.forEach((ele, idx) => {
        let i;

        for (i = idx + 1; i < this.length; i++) {
            if (this[idx] === -(this[i])) {
                let pair = [idx, i];
                pairs.push(pair);
            }
        }

    });
    return pairs;
}

Array.prototype.myTranspose = function () {

    let numNewRows = this[0].length;
    let transpose = [];
    let i;
    for (i = 0; i < numNewRows; i++) {
        transpose.push(Array(this.length));
    };
    for (i = 0; i < this.length; i++) {
        let j;
        for (j = 0; j < numNewRows; j++) {
            transpose[j][i] = this[i][j];
        };
    };
    return transpose;
}