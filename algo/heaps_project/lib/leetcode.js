
// Find the kth largest element in an unsorted array.Note that it is the kth largest element in the sorted order, not the kth distinct element.

//   Example 1:

// Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5
// Example 2:

// Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MaxHeap {
  constructor() {
    this.array = [null]
  }

  getParent(idx) {
    let parentIdx = Math.floor(idx / 2);
    return parentIdx;
  }

  getLeftChild(idx) {
    let leftIdx = idx * 2
    return leftIdx
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx)
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let arr = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (arr[idx] > leftVal && arr[idx] > rightVal) return;

    let max;
    if (leftVal > rightVal) {
      max = leftIdx;
    }
    else {
      max = rightIdx
    }

    [arr[idx], arr[max]] = [arr[max], arr[idx]];

    this.siftDown(max);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length == 2) return this.array.pop();
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1)

    return max;
  }
}
var findKthLargest = function (nums, k) {
  let heap = new MaxHeap();
  nums.forEach(num => heap.insert(num));
  let max = 0;
  for (let i = 1; i <= k; i++) {
    max = heap.deleteMax();
  }
  return max;

};