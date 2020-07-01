async function heapSort(ref, array) {
  // build max heap
  buildMaxHeap(ref, array);
  // while endpoint is greater than 0
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    // swap first value with the last
    swap(ref, 0, endIdx, array);

    // siftDown first value, leaving max at the end
    siftDown(ref, 0, endIdx - 1, array);

    // change the color of the endIdx, its in its sorted position
    let { value } = array[endIdx];
    ref.$set(array, endIdx, { value, color: ref.sorted });

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 80));
  }

  // change the color of the first, its in its sorted position
  let { value } = array[0];
  ref.$set(array, 0, { value, color: ref.sorted });

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
  colorLevels(ref, array, endIdx);

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

async function swap(ref, a, b, array) {
  // swap the values
  let { value: aVal, color: aCol } = array[a];
  let { value: bVal, color: bCol } = array[b];

  ref.$set(array, a, { value: bVal, color: aCol });
  ref.$set(array, b, { value: aVal, color: bCol });
}

function colorLevels(ref, array, endIdx) {
  const colors = {
    1: "gold",
    2: "#00ff99",
    3: "#00ccff",
    4: "pink",
    5: "#0066cc",
    6: "purple",
    7: "silver",
    8: "brown",
    9: "orange",
    10: "white",
  };

  // set the color based on the level in the heap
  array.forEach((num, index) => {
    if (index === 0) {
      let { value } = num;
      ref.$set(array, index, { value, color: "white" });
    } else if (index > 0 && index < endIdx) {
      let level = 1 + Math.floor(Math.log(index + 1) / Math.log(2));
      let { value } = num;
      ref.$set(array, index, { value, color: colors[level - 1] });
    }
  });
}

module.exports = heapSort;
