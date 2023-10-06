//your code here
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Example usage:
const input = [2, 1, 2];
const result = majorityElement(input);
console.log(result); // Output: 2

