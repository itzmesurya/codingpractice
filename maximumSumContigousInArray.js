let maxSubArray = function(arr, k) {
    let windowSum = 0,left = 0, right = 0, maxSum = 0;
    let windowVals = [], maxArr = [];

    //first get the sum of the 1st window
    //and create the window
    while(right < k) {
        windowVals.push(arr[right]);
        windowSum += arr[right];
        right++;
    }
    maxSum = windowSum;
    
    while(right < arr.length) {
        windowSum = windowSum - arr[left] + arr[right];
        windowVals.push(arr[right]);
        windowVals = windowVals.splice(1);
        if (maxSum < windowSum) {
            maxSum = windowSum;
            maxArr = [...windowVals]
        }
        left++; right++;
    }
    return maxArr;
}

let arr= [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 3;

console.log(maxSubArray(arr, k));