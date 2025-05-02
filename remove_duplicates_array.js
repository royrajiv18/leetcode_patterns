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