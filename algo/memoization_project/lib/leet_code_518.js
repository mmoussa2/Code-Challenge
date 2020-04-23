// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins) {
  let arr = new Array[n];  // [1]

    let sum = 0                       // [1,2,5]
  for (let i = 1; i <= amount; i++) {   //1,2,3,4,5
     if (i in coins){
        //sum += i  //sum = 3   [1]
        arr.push(i)
       let result = change(amount, arr[i-1] )   
     }
  }

};