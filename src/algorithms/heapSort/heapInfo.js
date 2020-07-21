function heapInfo() {
  return `Heap sort utilizes the heap data structure. As step
  one, heap sort creates a max heap out of the given values.
  As a rule of thumb, a max heap always pushes the largest value
  to the top. Heap sort will take the value off of the top of the
  max heap and place it on the far right. The max heap will then
  reorganize itself by pushing the next biggest value to the top
  of its structure. This process is repeated until the max heap
  runs hands off all of its values to the now sorted collection.`;
}

module.exports = heapInfo;
