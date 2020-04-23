function swap(arr, index1, index2) {

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// [ 2,1,5,3,9]
// i : 0, 1 ,2 ,3
// minIndex:  3
// j: 3,4, 5
// swap([2,1,5,3,9] , 0,1)
//swap([1,2,5,3,9] , 0,1)

// swap([1,2,5,3,9] , 2,3)
//swap([1,2,3,5,9] , 0,1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j
        }
        if (i !== minIndex){
          swap(arr, i, minIndex)
         }
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};