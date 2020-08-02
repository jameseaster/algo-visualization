function quickInfo() {
  return `Quick sort operates with a pivot and two pointers. In
  this app the pivot is colored gold and starts as the value on
  the far left of the collection. The pointers are green and move
  inward. Quick sort compares the values of the two pointers to the
  pivot. If the pointer on the left is smaller than the pivot then
  it moves inward to the next value. Similarly if the pointer on the
  right is larger than the pivot it moves inwardly. However, if the
  pointer on the left is larger than the pivot, and the pointer on
  the right is smaller than the pivot, the two pointers will swap
  values. Eventually the pointers meet in the middle which becomes
  the pivot's final sorted position. This algorithm then repeats on
  either side of the pivot recursively. It very quickly, efficiently,
  and recursively sorts a collection.`;
}

module.exports = quickInfo;
