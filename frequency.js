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
} // O(n), O(k)

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

console.log(firstNonRepeatingChar(str)) // l , 	O(n) and O(k) (number of unique characters)

/*
Check if Two Strings are Anagrams
Two strings are anagrams if they contain the same characters with the same frequencies, 
but possibly in a different order.
Ex - 
Input: "listen", "silent" → true  
Input: "hello", "world" → false
*/

const str1 = 'listen'
const str2 = 'silent'
function areAnagrams(str1, str2){
    const frqMap = {}
    if(str1.length !== str2.length) return false
    for(let char of str1){
        frqMap[char] = (frqMap[char] || 0) + 1
    }
    for (let char of str2){
        if(!frqMap[char]) return false
        frqMap[char] = frqMap[char] -1
    }
    return true
}

console.log(areAnagrams(str1, str2));

/*
Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1
*/

var firstUniqChar = function(s) {
  let frqMap = {};
  let i = 0
  for (let char of s){
      if(frqMap[char])
      frqMap[char] = [frqMap[char][0] + 1, i]
      else{
          frqMap[char] = [1,i]
      }
      i++;
  }
  for (let char of s){
      if(frqMap[char][0]===1) return frqMap[char][1]
  }
  return -1
};

console.log(firstUniqChar('loveleetcode')); // 2 

/*
Group Anagrams from a List of Strings
*/





/*
Top K Frequent Elements
*/





/*
Find the Majority Element (appears > n/2 times)
*/


