function functionTest(expected, func) {
    const result = func();
    if (result === expected) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

console.log("Expected output of sum([3,4,5,6]) is 18 and " + functionTest(18, function () { return sum([3,4,5,6]); }));

function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}


console.log("Expected output of multiply([3,4,5,6]) is 360 and " + functionTest(360, function () { return multiply([3,4,5,6]); }));


function multiply(numbers) {
    return numbers.reduce((acc, val) => acc * val, 1);
}


console.log("Expected output of reverse('webper') is 'repbew' and " + functionTest("webper", function () { return reverse("repbew"); }));
function reverse(str) {
    return str.split('').reverse().join('');
}


console.log("Expected output of findLongestWord(['algorithm', 'wap']) is 9 and " + functionTest(9, function () { return findLongestWord(['algorithm', 'wap']); }));

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

console.log("Expected output of filterLongWords(['algorithm', 'wap'], 3) is [algorithm] and " + functionTest(['algorithm'], function () { return filterLongWords(['algorithm', 'wap'], 3); }));

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}