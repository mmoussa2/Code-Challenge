function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set()

    while(queue.length > 0){
        let node = queue.shift()  
        
        if(targetVal == node.val){
            return node
        }
        if(visited.has(node.val)) continue;
         visited.add(node.val);

        node.neighbors.forEach(element => {
             queue.push(element)
        });
    }

    return null;

}

module.exports = {
    breadthFirstSearch
};