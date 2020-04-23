function binarySearch(array, target) {
  if (array.length < 1) return false;

  let mid = Math.floor(array.length / 2)
  let left = array.slice(0,mid)
  let right = array.slice(mid+1)

  if(target < array[mid]){
      return binarySearch(left,target)
  }
  else if(target > array[mid]){
      return binarySearch(right,target)
  }
  else{
      return true
  }

}

function binarySearchIndex(array, target) {
  
    if (array.length < 1 )  return -1
    const mid = Math.floor(array.length / 2);

    let left = array.slice(0, mid);
    let right = array.slice(mid+1);

    if(target < array[mid]){
        return binarySearchIndex(left, target);    
    }           
    else if(target > array[mid]){
       let r = binarySearchIndex(right, target);
       return r === -1? -1 : mid + 1 + r
    }
    else{
        return mid
    }

}

module.exports = {
    binarySearch,
    binarySearchIndex
};

    // [1, 2, 3, 4, 5]  target = 4 23
    // mid = 2  

    // [4,5]   mid = 1   target = 4  arr[mid] = 5

    // [4]     mid = 0  target = 4   arr[mid] = 4    mid + 1 + 0

// function binarySearch(array, target) {
//     if (array.length === 0) return -1;

//     const midpoint = Math.floor(array.length / 2);
//     if (array[midpoint] > target) {
//         return binarySearch(array.slice(0, midpoint), target);
//     } else if (array[midpoint] < target) {
//         const subResult = binarySearch(array.slice(midpoint + 1), target);
//         return subResult === -1 ? -1 : subResult + midpoint + 1;
//     } else {
//         return midpoint;
//     }
// }