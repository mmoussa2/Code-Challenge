// you may assume that the array will always have a null element at the 0-th index


function isMaxHeap(array, idx=1) {   //idx is the index of the root
    if(array[idx] === undefined) return true;

    let leftIndex = idx * 2;
    let rightIndex = idx * 2 + 1;

    let leftVal = array[leftIndex] === undefined ? -Infinity : array[leftIndex] 
    let rightVal = array[rightIndex] === undefined ? -Infinity : array[rightIndex]

    return (array[idx] > leftVal && array[idx] > rightVal) && isMaxHeap(array,idx * 2) && isMaxHeap(array,idx * 2 + 1)

}


module.exports = {
    isMaxHeap
};