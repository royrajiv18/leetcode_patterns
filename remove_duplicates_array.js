/*
Given a sorted array, remove the duplicates in-place such that each element appears only once 
and return the new length. 
The relative order should be maintained.
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

const input = [1,1,2]
// output 2

const removeDuplicates = (input)=> {
    if(input.length === 0) return 0
    
    let uniqueIndex = 1;
    for(let i =1; i<input.length; i++ ){
        if(input[i]!== input[i-1]){
            input[uniqueIndex] = input[i] //
            uniqueIndex++
        }
    }
    return uniqueIndex
}
console.log(removeDuplicates(input)) //2

/*
Remove Element
/*Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

const nums = [0,1,2,2,3,0,4,2];
const val = 2

const removeElement = (nums)=> {
    let indexWithVal = 0
    if(nums.length === 0) return indexWithVal;
    
    for(let i =0; i< nums.length; i++){
        if(nums[i]!== val){
            nums[indexWithVal] = nums[i];
            indexWithVal++
        }
    }
    return indexWithVal;
    
    
}
console.log(removeElement(nums)) // 5
