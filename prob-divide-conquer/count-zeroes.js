// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called  ***countZeroes***, 
// which returns the number of zeroes in the array.

// need to divide the array by 1s and 0s. To do must find first index where val is 0 and slice array there
function countZeroes() {
  let zeroes = cutzeros(arr);
  if (zeroes == -1) {
    return console.log("No zeros in array");
  }
  return arr.length - cutzeros
}

function cutzeros(arr, lowest = 0, highest = arr.length -1) {

    if (highest >= lowest) {
        let mid = lowest + Math.floor((highest-lowest)/2)
        if ((mid === 0 || arr[mid-1]) && arr[mid] === 0) {
            return mid;
        }
        else if (arr[mid]===1) {
            return cutzeros(arr, mid+1, highest);
        }
        return cutzeros(arr, lowest, mid-1);
    }
    return -1;
}

module.exports = countZeroes 