function count(num){
  if(num === 0){
    console.log("hi");
    return;
  }
 console.log(num);
  count(num - 1);
}

count(10);