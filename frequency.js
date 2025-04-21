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

