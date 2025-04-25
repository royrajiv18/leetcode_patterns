/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 step or 2 steps.
In how many distinct ways can you climb to the top?
Input:  n = 5
Output: 8
*/

// ways(n) = ways(n-1) + ways(n-2)

//DP approach

function climbStairs(n) {
    if (n <= 2) return n;
  
    let prev = 1, curr = 2;
  
    for (let i = 3; i <= n; i++) {
      let temp = curr;
      curr = curr + prev;
      prev = temp;
    }
  
    return curr;
  }
  
  /* Test it
  const steps = 5;
  const ways = climbStairs(steps);
  console.log(ways); // 8
  */

  // Recursive + Memoization (Top-down)

  function climbStairsMemo(n, memo = {}) {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
    return memo[n];
  }

  /*
  You're climbing a staircase of n steps, and you can climb 1, 2, or 3 steps at a time.
How many distinct ways can you reach the top?

Input:  n = 4
Output: 7
  */

// ways(n) = ways(n-1) + ways(n-2) + ways(n-3)

// DP approach
function climbStairs123(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
  
    let dp = [1, 1, 2]; // Base cases: ways(0)=1, ways(1)=1, ways(2)=2
  
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
  
    return dp[n];
  }
  
  // Test it
  const steps = 4;
  const ways = climbStairs123(steps);
  console.log(ways); // 7

  
  // Optimized Space (O(1) space)
  function climbStairs123Optimized(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
  
    let a = 1, b = 1, c = 2;
  
    for (let i = 3; i <= n; i++) {
      const total = a + b + c;
      a = b;
      b = c;
      c = total;
    }
  
    return c;
  }
  
  // TODO - stairs with some broken steps
