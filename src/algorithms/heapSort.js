function heapSort(ref, array) {
  // build max heap
  buildMaxHeap(ref, array);
  // while endpoint is greater than 0
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    // swap first value with the last
    swap(ref, 0, endIdx, array);
    // siftDown first value, leaving max at the end
    siftDown(ref, 0, endIdx - 1, array);
  }
  return array;
}

function buildMaxHeap(ref, array) {
  // find last parent index
  let lastParentIdx = Math.floor((array.length - 2) / 2);

  // sift down each parent
  for (let curParIdx = lastParentIdx; curParIdx >= 0; curParIdx--) {
    siftDown(ref, curParIdx, array.length - 1, array);
  }
}

function siftDown(ref, currentIdx, endIdx, array) {
  // find first child
  let childOneIdx = currentIdx * 2 + 1;
  // largest child index
  let largestChildIdx;

  // only continue if childOneIdx is less <= endIdx
  while (childOneIdx <= endIdx) {
    // find childTwoIdx, must be >= endIdx
    let childTwoIdx = endIdx >= currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;

    // find the child with the greater value
    if (
      childTwoIdx !== -1 &&
      array[childTwoIdx].value > array[childOneIdx].value
    ) {
      largestChildIdx = childTwoIdx;
    } else {
      largestChildIdx = childOneIdx;
    }

    // if largest child is greater than parent
    if (array[largestChildIdx].value > array[currentIdx].value) {
      // swap them
      swap(ref, largestChildIdx, currentIdx, array);
      // update currentIdx
      currentIdx = largestChildIdx;
      // update childOneIdx
      childOneIdx = currentIdx * 2 + 1;

      // if parent is larger than largest child, return
    } else {
      return;
    }
  }
}

function swap(ref, a, b, array) {
  // const temp = array[a];
  // array[a] = array[b];
  // array[b] = temp;

  let { value: aVal } = array[a];
  let { value: bVal } = array[b];
  ref.$set(array, a, { value: bVal, color: ref.sorted });
  ref.$set(array, b, { value: aVal, color: ref.sorted });
}

module.exports = heapSort;
