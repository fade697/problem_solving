function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(isPalindrome('Race car')); // Output: true
console.log(isPalindrome('Hello, world!')); // Output: false
