/*
Given a non-empty array of integers nums, 
every element appears twice except for one. Find that single one.
Input: nums = [2,2,1]

Output: 1
*/

const nums = [2,2,1,1,4,3,4]

const singleNumber = (nums)=> {
    for(let i = 0; i< nums.length; i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
}

console.log(singleNumber(nums)) // 3

// O(n*n) O(1)

// Optimized approach using XOR

const singleNumberOptimized = (nums) => {
    let result = 0;
    for (let num of nums) {
        result ^= num; // XOR cancels out pairs
    }
    return result;
}

console.log(singleNumberOptimized(nums)) // 3
// O(n), O(1)
