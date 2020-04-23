function maxValue(node, visited=new Set()) {

    let stack = [node];

    while(stack.length > 0){
        let node = stack.pop();

        if( visited.has(node.val)){
           continue;
        }
        visited.add(node.val);

        stack.push(...node.neighbors)
    }
  
   let arrVisted = Array.from(visited);
   return (Math.max(...arrVisted));
}

module.exports = {
    maxValue
};

// var mySet = new Set([1, 2, 3, 3, 2, 1]);
// var setMax = d3.max(Array.from(mySet.values()));
// console.log(setMax);