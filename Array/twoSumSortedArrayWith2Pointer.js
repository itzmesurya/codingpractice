/**
 * 
# Two Sum with a sorted array - 2 pointer approach
This function iterates through the array with two pointers, one starting from the beginning and the other from the end. It adjusts the pointers based on the sum of the values at their current positions compared to the target value. If the sum is equal to the target, it adds the indexes to the result. If the sum is less than the target, it moves the left pointer to the right to increase the sum, and if the sum is greater than the target, it moves the right pointer to the left to decrease the sum.
 */

function twoSumSortedArray(arr, target) {
    let p1 = 0, p2 = arr.length - 1;
    let result = [];
    while (p1 < p2) {
        if (arr[p1] + arr[p2] === target) {
            result.push(p1, p2);
            p1++;
            p2--;
        }
        if (arr[p1] + arr[p2] < target) {
            p1++;
        } else {
            p2--;
        }
    }

    return result;
}

let arr = [3, 4, 5, 6, 8, 9, 34]
let target = 37;

console.log(twoSumSortedArray(arr, target));