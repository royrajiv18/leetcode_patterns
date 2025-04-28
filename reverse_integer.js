function reverseInteger(x) {
    const isNegative = x < 0;
    let reversedStr = Math.abs(x).toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
  
    if (isNegative) {
      reversedNum = -reversedNum;
    }
  
    // 32-bit signed integer range check
    if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
      return 0;
    }
  
    return reversedNum;
  }
  
  // Test it
  console.log(reverseInteger(123));      // 321
  console.log(reverseInteger(-456));     // -654
  console.log(reverseInteger(120));      // 21
  console.log(reverseInteger(1534236469)); // 0
  