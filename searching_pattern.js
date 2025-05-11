/*
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
*/

const nums = [9,6,4,2,3,5,7,0,1];

const missingNum = (nums)=> {
    const numLength = nums.length;
    
    for(i=0;i<=nums.length;i++){
        if (nums.indexOf(i)=== -1){
            return i
        }
    }
}
console.log(missingNum(nums)); //8


// Best approach
const nums1 = [9,6,4,2,3,5,7,0,1];

const missingNum1 = (nums1)=> {
    const n = nums1.length;
    const expectedSum = (n*(n+1))/2;
    const actualSum = nums1.reduce((sum, num)=>sum+num, 0);
    return expectedSum - actualSum;
}
console.log(missingNum1(nums1)); //8

// O(n), O(1)
