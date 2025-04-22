/*
Frequency related problems
Ex - Find the Most Frequent Element in an Array
Input: [1, 3, 2, 1, 4, 1, 3]
Output: 1
*/

const mostFrequentElement(arr){
  const freqMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  for(let num of arr){
    freqMap[num] = (freqMap[num] || 0) + 1

    if(freqMap[num] > maxCount){
      maxCount = freqMap[num];
      mostFrequent = num
    }
  }

  return mostFrequent;
}

/*
First Non-Repeating Character in a String. 
Given a string, find the first character that does not repeat, and return it.
If all characters repeat, return null or -1
Ex - 
Input: "leetcode"
Output: "l"

Input: "aabbcc"
Output: null
*/

const str = 'leetcode';
function firstNonRepeatingChar(str){
    let freqMap = {}
    
    for(let char of str){
        freqMap[char] = (freqMap[char] || 0) + 1
    }
    
    for(let char of str){
        if(freqMap[char] === 1){
            return char
        }
    }
    return null
}

console.log(firstNonRepeatingChar(str)) // l

