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