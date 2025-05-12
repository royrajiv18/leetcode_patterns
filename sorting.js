// Contains Duplicate
/*Input: nums = [1,2,3,1]

Output: true
*/

const nums = [1,1,1,3,3,4,3,2,4,2];

const containsDuplicate = (nums)=> {
    nums.sort((a,b)=> a-b)
   for(let i = 0; i< nums.length-1; i++){
       if(nums[i]===nums[i+1]) return true
   }
   return false
}
console.log(containsDuplicate(nums)); // true 
// O(n log n), O(1) to O(n) depends on engines

// Better approach using set

const containsDuplicateUsingSet = (nums)=> {
    const seen = new Set();
    for (const num of nums){
        if(seen.has(num)) return true
        seen.add(num)
    }
    return false;
}
console.log(containsDuplicateUsingSet(nums)); // true

// O(n) O(n)