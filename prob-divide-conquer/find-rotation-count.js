// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times.Given such an array, find the value of n.


function findRotationCount(array, lowest = 0, highest = array.length - 1) {
    if(highest < lowest) {
        return 0;
    }
    if (highest === lowest) {
        return lowest;
    }
    

    let mid = Math.floor((highest+lowest) / 2);

    if (mid < highest && array[mid+1] < array[mid] ){
        return mid+1;

    }
    if (mid > lowest && array[mid-1] > array[mid]) {
        return mid;
    }


    if (array[highest] > array[mid]) {
        return findRotationCount(array, low, mid-1);
    }
    return findRotationCount(array, mid+1, highest);
  
}

module.exports = findRotationCount