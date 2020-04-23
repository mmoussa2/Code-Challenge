function numRegions(graph) {

    for (let node in graph) {  
      let stack = [node];
    
      while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.neighbors);
        if (visited.has(node.val)) {
            continue;
        }
        visited.add(node.val);

        stack.push(...node.neighbors)
    }
}
    // let count = 0;
    // for(let node in graph){   

        // let stack = [node];
        // let visited = new Set();
        // let counter = 0

        // while (stack.length > 0 && !visited.has(node)) {
        //     let node = stack.pop();
        //     visited.add(node);
        //     console.log(node.neighbors);
        //     node.neighbors.forEach(element => {
              
        //         stack.push(element);
        //     });

        //     counter = 1
        // }

        // return counter;

        // }
        
 }

// function hasNeighbor(node) {    //node = a  stack = []  visited = [a,b]
   

//     let stack = [node];
//     let visited = new Set();
//     let counter = 0

   
//     while (stack.length > 0 && !visited.has(node) ) {
//         let node = stack.pop();
//         visited.add(node);
//         node.neighbors.forEach(element => {
          
//             stack.push(element);
//         });

//         counter = 1
//     }
 
//     return counter;

// }

// let graph1 = {
//     'a': ['b'],
//     'b': ['a'],
//     'c': ['d'],
//     'd': ['e', 'c'],
//     'e': ['d'],
// };




module.exports = {
    numRegions
};