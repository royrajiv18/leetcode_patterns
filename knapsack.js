// 0/1 Knapsack

/* Given:
A set of items, each with a weight and value.
A knapsack with a maximum weight capacity W.
Find the maximum total value of items that can be put in the knapsack without exceeding the capacity. 
You can either take an item once or not at all (0/1 constraint).
*/

// DP Bottom up approach

function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]], // take item
          dp[i - 1][w]                                   // skip item
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

/*
Ex - 
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
console.log(knapsack(weights, values, capacity)); // Output: 7 (items with weights 2 and 3)
*/

// Optimized Space (1D DP)

/* We can reduce the space from O(n*W) to O(W) by iterating backwards:
*/

function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }

  return dp[capacity];
}

// TODO - Fractional Knapsack, recursive with memoization version
