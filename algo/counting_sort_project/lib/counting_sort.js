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