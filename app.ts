// const nums = [1, 3, 5, 2];
// const cost = [2, 3, 1, 14];

const handleCaculate = (nums: number[], cost: number[]) => {
  const sums = nums.reduce((a, b) => a + b, 0);
  const avg = Math.floor(sums / nums.length);
  const absoluteDiff = nums.map((num) => (num < avg ? avg - num : num - avg));

  let result = 0;

  absoluteDiff.forEach((diff, index) => {
    for (let i = 1; i <= diff; i++) {
      result = result + cost[index];
    }
  });

  return result;
};

console.log(handleCaculate([1, 3, 5, 2], [2, 3, 1, 14]));
