function count(num){
  if(num === 0){
    console.log("hi");
    return;
  }
 console.log(num);
  count(num - 1);
}

//count(10);

function factorial(n) {
  if(n === 1 ) return 1;
  return  n * factorial(n-1);

}

//console.log(factorial(4));


//bad sol:
function fib(n){
  if(n === 1 || n === 2)  return 1;
  return fib(n-1) + fib(n-2);
  
}

//optimize fib:
function fib(n){

  if(n===1 || n===2 ) return 1;
   
}

console.log(fib(4));



const groupAnagram = strs => {
  const map = {};
  for (let str of strs) {
    const key = [...str].sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
};


let strss = ["eat", "tea", "tan", "ate", "nat", "bat"];


console.log(groupAnagram(strss));
