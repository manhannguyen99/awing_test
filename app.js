// const nums = [1, 3, 5, 2];
// const cost = [2, 3, 1, 14];
var handleCaculate = function (nums, cost) {
    var sums = nums.reduce(function (a, b) { return a + b; }, 0);
    var avg = Math.floor(sums / nums.length);
    var absoluteDiff = nums.map(function (num) { return (num < avg ? avg - num : num - avg); });
    var result = 0;
    absoluteDiff.forEach(function (diff, index) {
        for (var i = 1; i <= diff; i++) {
            result = result + cost[index];
        }
    });
    return result;
};
console.log(handleCaculate([1, 3, 5, 2], [2, 3, 1, 14]));
