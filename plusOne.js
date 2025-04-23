/*
Increment the large integer by one and return the resulting array of digits.
Input: digits = [1,2,3]
Output: [1,2,4]
Input: digits = [9]
Output: [1,0]
*/

const digits = [1,2,3,9]

const plusOne = (digits)=> {
   for(let i = digits.length -1; i>=0; i--){
       if(digits[i]<9){
           digits[i]++
           return digits
       }
       digits[i]=0;
   }
   return [1, ...digits]
}

console.log(plusOne(digits)); // [1,2,4,0]