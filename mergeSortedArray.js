// From the DSA Course

function mergeSortedArrays(arr1, arr2) {
    if (!arr1.length && !arr2.length) return arr1;
    if (!arr1.length && arr2.length) return arr2;
    if (arr1.length && !arr2.length) return arr1;
    let combinedArr = arr1.concat(arr2);
    combinedArr.sort(function(a, b) {return a - b});
    return combinedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));