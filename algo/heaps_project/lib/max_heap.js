class MaxHeap {
    constructor() {
        this.array = [null]
    }

    getParent(idx){
     let parentIdx = Math.floor(idx / 2);
     return parentIdx;
    }

    getLeftChild(idx) {
        let leftIdx = idx * 2
        return leftIdx
    }

    getRightChild(idx){
        return idx * 2 + 1;
    }

    siftUp(idx){
        if(idx === 1) return;
        let parentIdx = this.getParent(idx)
        if (this.array[idx] > this.array[parentIdx]){
           [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]] ;
             this.siftUp(parentIdx);
        }
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length -1);
    }

    siftDown(idx){
        let  arr = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx) ;
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];

        if(leftVal === undefined) leftVal = -Infinity;
        if(rightVal === undefined) rightVal = -Infinity;

        if(arr[idx]> leftVal && arr[idx] > rightVal) return;
        
        let max;
        if(leftVal > rightVal){
             max = leftIdx;
        }
        else{
             max = rightIdx
        }

        [arr[idx] , arr[max]] = [ arr[max] , arr[idx]];

        this.siftDown(max);
    }

    deleteMax(){
        if(this.array.length === 1) return null;
        if(this.array.length == 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();  
        this.siftDown(1)

        return max;
    }

   
    


}

module.exports = {
    MaxHeap
};