let arr1 = [1,3,4,5];
let arr2 = [2,5,6,7,9,11];

/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns mergedArray
 */
const mergeArrays = function (arr1 , arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeArrays(arr1, arr2));