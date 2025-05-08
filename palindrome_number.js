const input = 12321
const isPalindrome = (input)=> {
    if (input < 0) return false;
    
    let original = input;
    let reversed =0;
    
    while(input > 0){
        const digit = input%10;
        reversed = reversed * 10 + digit;
        input = Math.floor(input/10);
    }
    return original === reversed
}

console.log(isPalindrome(input))
// O(log n), O(1)