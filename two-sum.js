// The Two Sum problem states that given an array of integers, return indices of the two numbers such that they add up to a specific target. 
// We can’t use the same element twice.
// Ex - Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

// First approach - Brute Force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Second approach - Optimized hash map approach
const nums = [2, 7, 11, 15];
const target = 13;

const twoSum = (nums, target)=> {
    const arrMap = {};
    
    for(let i = 0; i< nums.length; i++){
        const complement = target - nums[i];
        
        if(arrMap.hasOwnProperty(complement)) {
            return [arrMap[complement], i]
        }
        
        arrMap[nums[i]] = i;
    }
    return []
}

console.log(twoSum(nums, target)) // [0,2]

