/* This is my solution for the "Say the number" code challenge, with the help of ChatGPT. */

function capitalizeWords(arr) {
    return arr.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase;

        return firstLetter + rest;
    });
}

function numberToWords(num) {
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let words = "";
    if (num == 0) {
        words = 'zero';
    } else if (num < 0) {
        words = 'negative' + numberToWords(-num);
    } else if (num < 10) {
        words = ones[num];
    } else if (num < 20) {
        words = teens[num - 10];
    } else if (num < 100) {
        words = tens[num - Math.floor(num / 10) + ' ' + ones[num % 10]];
    } else if (num < 1000000) {
        words = numberToWords(Math.floor(num / 1000)) + 'thousand' + numberToWords(num % 100);
    } else if (num < 1000000000) {
        words = numberToWords(Math.floor(num / 1000000)) + 'million' + numberToWords(num % 1000000);
    } else {
        words = numberToWords(Math.floor(num / 1000000000)) + 'billion' + numberToWords(num % 1000000000);
    }

    return capitalizeWords(words.trim());

};