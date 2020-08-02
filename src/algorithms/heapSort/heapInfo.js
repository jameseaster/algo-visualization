function heapInfo() {
  return `Heap sort utilizes the heap data structure. In fact, step
  one to this algorithm is creating a max heap out of the unsorted
  values. As a rule of thumb, a max heap always pushes the largest
  value to the top of its structure. Heap sort will take the value
  off of the top of the max heap and place it on the far right of
  the list. Then, the max heap will then reorganize itself by pushing
  the next biggest value to the top of its structure. This process
  is repeated until the max heap has handed off all of its values
  to the now sorted collection.`;
}

module.exports = heapInfo;
