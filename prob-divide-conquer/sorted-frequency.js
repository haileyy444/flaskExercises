// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(array, numberInput) {
    let first = findFirstIdx(array, numberInput);
    if (first == -1) {
        return first;
    }
    let last = findLastIdx(array, numberInput);
    return last - first+1;
}

function findFirstIdx(array, low=0, high=array.length-1) {
    if(high >= low) {
        let mid = Math.floor((high+low) /2 );
        if((mid === 0 || numberInput > array[mid-1]) && array[mid === numberInput]) {
            return mid;
        }
        else if ( numberInput > array[mid]) {
            return findFirstIdx(arr, numberInput, mid+1, high);
        }
        else {
            return findFirstIdx(array, numberInput, low, mid-1)
        }
    }
    return -1;
}

function findLastIdx(array, numberInput, low=0, high=array.length-1) {
    if(high >= low) {
        let mid = Math.floor((high+low) /2 );
        if((mid === array.length-1 || numberInput < array[mid+1]) && array[mid] === numberInput) {
            return mid;
        }
        else if ( numberInput < array[mid]) {
            return findFirstIdx(array, numberInput, low, mid-1);
        }
        else {
            return findFirstIdx(arr, numberInput, mid+1, high)
            
        }
    }
    return -1;
}

module.exports = sortedFrequency