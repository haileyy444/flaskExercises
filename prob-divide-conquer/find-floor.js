// Write a function called findFloor which accepts a sorted array and a value x,
//  and returns the floor of x in the array. The floor of x in an array is the largest 
//  element in the array which is smaller than or equal to x.
//  If the floor does not exist, return -1.




function findFloor(arr, numberInput, lowest = 0, highest = arr.length -1) {
  if (lowest > highest){
    return console.log("Error in data set");
  }
  if (numberInput >=arr[highest]) {
    return arr[highest];
  }
//   ^^^^^^ catch data set issues
// est midpt
  let mid = Math.floor((highest+lowest)/2);
//   catch midpoint
  if (arr[mid] === numberInput){
    return arr[mid];
  }
  if (mid > 0 && arr[mid-1] <= numberInput && numberInput > arr[mid]) {
    return arr[mid-1];
  }
  if (numberInput < arr[mid]) {
    return findFloor(arr, numberInput, lowest, mid-1);
  }
  return findFloor(arr, numberInput, mid+1, highest)
}

module.exports = findFloor