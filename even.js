// 1 Even or odd

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
console.log(isEvenOrOdd(4)); // Output: "Even"
console.log(isEvenOrOdd(7)); // Output: "Odd"




//2 palindrome
function isPalindrome(str) {
    // Convert string to lowercase for case-insensitive comparison
    let normalizedStr = str.toLowerCase();
    // Reverse the string and compare it with the original
    let reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Malayalam")); // Output: true


//3 find largest  number

function findLargest(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Example usage:
console.log(findLargest(10, 20, 15)); // Output: 20
console.log(findLargest(5, 3, 9));    // Output: 9
console.log(findLargest(1, 4, 4));    // Output: 4

