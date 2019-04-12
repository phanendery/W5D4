Array.prototype.bubbleSort = function () {

    for(let i = 0; i < this.length - 1; i++ ) {

        for(let j = i+1; j < this.length; j++ ) {

            if ( this[i] > this[j] ) {

                temp = this[i];
                this[i] = this[j];
                this[j] = temp;

            }
        }
    }
}

String.prototype.substrings = function () {

    return "Does nada yet!"
}