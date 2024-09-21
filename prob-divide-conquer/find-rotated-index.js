// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.

function findRotatedIndex(array, num) {
 var pivot = findPivotPt(array)
 if (pivot > 0 && num >= array[0] && num <= array[pivot-1]) {
    return SearchArray(array, num, 0, pivot-1)
 }
 else {
    return SearchArray(array, num, pivot, array.length-1)
 }
}

function SearchArray(array, num, start, end) {
    if(array.length === 0){
        return console.log("Error, array length is 0");
    }
    if(num < array[start] || num > array[end]) {
        return console.log("Error, integer is not in range of array");
    }
    // ^^^^ catch issues 

    while(start <= end) {
        var mid = Math.floor((start+end)/2);
        if(array[mid] === num) {
            return mid;
        }
        else if (num < array[mid]){
            end = mid-1;
        }
        else {
            start = mid+1;
        }
    }
    return console.log("Error running in while loop, start >= end");
}

function findPivotPt(array) {
    if(array.length ===1 || array[0] < array[array.length-1]) {
        return 0;
    }
    var start = 0;
    var end = array.length-1;
    while (start <= end) {
        var mid = Math.floor((start+end)/2);
        if(array[mid] > array[mid +1]) {
            return mid +1;
        }
        else if (array[start] <= array[mid]){
            start = mid+1;
        }
        else {
            end = mid-1;
        }
    }
}


module.exports = findRotatedIndex