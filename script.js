'use strict';

(function () {

    let findIndex = function (list, listDel) {
        let arrDiff = [];
        for (let i = 0; i < list.length; i++) {
            if (listDel.indexOf(list[i]) === -1)
                arrDiff.push(list[i]);
        }
        return arrDiff;
    }

    let arr = [1, 2, 2, 2, 3];
    let arrDel = [2, 9, 99, -1];

    console.log(arr);
    console.log(arrDel);
    console.log(findIndex(arr, arrDel));
})();

(function () {

    let alphabetPosition = function (string) {

        let firstLetters = 'a';
        let lastLetters = 'z';
        let stringLowerCase = string.toLowerCase();

        for (let i = 0; i < stringLowerCase.length; i++) {
            if (stringLowerCase[i] >= 'а' && stringLowerCase[i] <= 'я') {
                firstLetters = 'а';
                lastLetters = 'я';
            }
        }

        return stringLowerCase.split('')
            .filter(char => char >= firstLetters && char <= lastLetters)
            .map(char => char.charCodeAt(0) - firstLetters.charCodeAt(0) + 1)
            .join(' ');

    }

    let sentence = "The sunset sets at twelve o' clock.";

    console.log(sentence);
    console.log(alphabetPosition(sentence));
})();

(function () {
    const DEGREE = 2;
    let squareEveryDigit = function (number) {
        let arr = [];
        let splitNum = number.toString();
        for (let i = 0; i < splitNum.length; i++) {
            arr.push(Math.pow(splitNum[i], DEGREE))
        }
        return arr.join('');
    }


    let squareEveryDigit2 = function (number) {
        let splitNum = number.toString().split('');
        let mapped = splitNum.map(item => Math.pow(item, DEGREE));
        return mapped.join('');
    }


    let squareEveryDigit3 = function (number) {
        let splitNum = number.toString().split('');
        splitNum.forEach(function (element, index, array) {
            array[index] = Math.pow(element, DEGREE);
        });
        return splitNum.join('');

    }



    console.log(squareEveryDigit(9119));
    console.log(squareEveryDigit2(9119));
    console.log(squareEveryDigit3(9119))
})();