'use strict';

(function () {
    let arr = [1, 2, 2, 2, 3];
    let arrDel = [2, 9, 99, -1];

    let getChange = function (item, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === item) return true;
        }
        return false;
    }

    let arrDiff = arr.filter(i => !getChange(i, arrDel));

    console.log(arr);
    console.log(arrDel);
    console.log(arrDiff);
})();

(function () {
    let sentence = "The sunset sets at twelve o' clock.";

    let alphabetPosition = function (string) {
        return string.toLowerCase().split('')
            .filter(c => c >= 'a' & c <= 'z')
            .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            .join(' ');
    }

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
