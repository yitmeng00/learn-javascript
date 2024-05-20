var numSubarraysWithSum = function (nums, goal) {
    let count = 0;
    const n = nums.length;

    for (let start = 0; start < n; start++) {
        let sum = 0;
        for (let end = start; end < n; end++) {
            sum += nums[end];
            if (sum === goal) {
                count++;
            }
        }
    }

    return count;
};

const nums1 = [1, 0, 1, 0, 1];
console.log(numSubarraysWithSum(nums1, 2)); // Output: 4

const nums2 = [0, 0, 0, 0, 0];
console.log(numSubarraysWithSum(nums2, 0)); // Output: 15
