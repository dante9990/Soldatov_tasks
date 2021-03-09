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
    let squareEveryDigit = function (number) {
        const DEGREE = 2;
        let arr = [];
        let splitNum = number.toString();
        for (let i = 0; i < splitNum.length; i++) {
            arr.push(Math.pow(splitNum[i], DEGREE))
        }
        return arr.join('');
    }


    let squareEveryDigit2 = function (number) {
        let arr = [];
        let splitNum = number.toString();
        for (let i = 0; i < splitNum.length; i++) {
            arr.push(splitNum[i]);
        }
        let mapped = arr.map(x => Math.pow(x, 2));
        return mapped.join('');
    }


    let squareEveryDigit3 = function (number) {
        let numbers = [];
        let splitNum = number.toString();
        for (let i = 0; i < splitNum.length; i++) {
            numbers.push(splitNum[i]);
        }
        numbers.forEach(function (element, index, array) {
            array[index] = element * element;
        });
        return numbers.join('');

    }



    console.log(squareEveryDigit(9119));
    console.log(squareEveryDigit2(9119));
    console.log(squareEveryDigit3(9119))
})();