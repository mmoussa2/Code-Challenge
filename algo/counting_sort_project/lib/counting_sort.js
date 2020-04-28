

//this pair with Sadman:



// function countingSort(arr, max) {
//   const result = [];

//    const counters = new Array(max + 1).fill(0);

//    for(let i = 0; i < arr.length; i++){
//        counters[arr[i]]++;
//    }

//    for(let i=0; i < counters.length; i++){
//        while(counters[i] > 0){
//            result.push(i);
//            counters[i] --
//        }
//    }
//    return result;
// }

function countingSort(arr, max){
    let result  = [];

    const countArray =  new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length ; i++){
        countArray[arr[i]] ++;
    }
    
    for( let j = 0 ; j < countArray.length; j++){
    while( countArray[j] >  0 ){
        result.push(j);
        countArray[j] -- ;
     }
    }

    return result;
}

module.exports = {
    countingSort
};


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentEl = arr[i];
        for (var j = i - 1; j >= 0 && currentEl < arr[j]; j--) {
            arr[j + 1] = arr[j];
            // arr[j] = currentEl;
        }
        arr[j + 1] = currentEl;

    }
    return arr;
}

module.exports = {
    insertionSort
};

let arr = [3, 2, 5, 1]
insertionSort(arr);
console.log(arr);



 ///................................................................

/// these pair with David:



// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins) {
    let arr = new Array[n];  // [1]

    let sum = 0                       // [1,2,5]
    for (let i = 1; i <= amount; i++) {   //1,2,3,4,5
        if (i in coins) {
            //sum += i  //sum = 3   [1]
            arr.push(i)
            let result = change(amount, arr[i - 1])
        }
    }

};