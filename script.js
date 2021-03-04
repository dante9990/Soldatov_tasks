'use strict';

(function () {
    let arr = [1, 2, 2, 2, 3];
    let arrDel = [2, 9, 99, -1];

    let findIndex = function (item, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === item) return true;
        }
        return false;
    }


    let deleteElement = function(array, arrayDelete) {
        let arrDiff = array.filter(i => !findIndex(i, arrayDelete));

        return arrDiff;
    }
    

    console.log(arr);
    console.log(arrDel);
    console.log(deleteElement(arr,arrDel));
})();

(function () {
    let sentence = "The sunset sets at twelve o' clock.";

    let alphabetPosition = function (string) {
        return string.toLowerCase().split('')
            .filter(c => c >= 'a' & c <= 'z')
            .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            .join(' ');
    }

    console.log(sentence);
    console.log(alphabetPosition(sentence));
})();

(function () {
    let squareEveryDigit = function (number) {
        var arr = [];
        var splitNum = number.toString();
        for (var i = 0; i < splitNum.length; i++) {
            arr.push(Math.pow(splitNum.charAt(i), 2))
        }
        return arr.join('');
    }


    console.log(squareEveryDigit(9119));
})();