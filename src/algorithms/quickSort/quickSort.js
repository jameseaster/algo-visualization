async function quickSort(ref, array, startIdx, endIdx) {
  // if the array is less than length 2, return
  if (startIdx >= endIdx) {
    // change the colors of this array to sorted
    if (array[startIdx]) {
      let { value } = array[startIdx];
      ref.$set(array, startIdx, { value, color: ref.sorted });
    }
    if (array[endIdx]) {
      let { value } = array[endIdx];
      ref.$set(array, endIdx, { value, color: ref.sorted });
    }
    return array;
  }
  // create a pivot at the startIdx
  let pivot = startIdx;
  // left pointer is pivot + 1
  let left = pivot + 1;
  // right pointer is the end of the array
  let right = endIdx;

  // // start each array with primary colors
  array.forEach((num, index) => {
    if (index >= startIdx && index <= endIdx) {
      num.color = ref.primary;
    }
  });

  // set pivot color to be gold
  let { value } = array[pivot];
  ref.$set(array, pivot, { value, color: "gold" });

  // while left pointer is less than or equal to right pivot
  while (left <= right) {
    // right and left pointers can be compare color
    let { value: l } = array[left];
    let { value: r } = array[right];
    ref.$set(array, left, { value: l, color: ref.compare });
    ref.$set(array, right, { value: r, color: ref.compare });

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 20));

    // If value at left > pivot && value at right < pivot
    if (
      array[left].value > array[pivot].value &&
      array[right].value < array[pivot].value
    ) {
      // swap left and right values
      let { value: l } = array[left];
      let { value: r } = array[right];
      ref.$set(array, left, { value: r, color: array[left].color });
      ref.$set(array, right, { value: l, color: array[right].color });
    }

    // pivot value is >= left pointer, increase left pointer
    if (array[pivot].value >= array[left].value) {
      let { value: newVal } = array[left];
      ref.$set(array, left, { value: newVal, color: ref.primary });
      left += 1;
    }

    // pivot value is <= right pointer, decrease right pointer
    if (array[pivot].value <= array[right].value) {
      let { value: newVal } = array[right];
      ref.$set(array, right, { value: newVal, color: ref.primary });
      right -= 1;
    }
  }

  // pauses the event loop to better visualize the algo
  await new Promise((resolve) => setTimeout(resolve, 20));

  // Swap the values of pivot and right pointer
  let { value: p } = array[pivot];
  let { value: rValue } = array[right];
  ref.$set(array, pivot, { value: rValue, color: ref.compare });
  ref.$set(array, right, { value: p, color: ref.sorted });

  // find the smaller of the two remaining arrays
  let leftArrayIsSmaller = right - 1 - startIdx < endIdx - right + 1;

  // call quickSort on smallest remaining array first
  if (leftArrayIsSmaller) {
    quickSort(ref, array, startIdx, right - 1);
    quickSort(ref, array, right + 1, endIdx);
  } else {
    quickSort(ref, array, right + 1, endIdx);
    quickSort(ref, array, startIdx, right - 1);
  }

  return array;
}

module.exports = quickSort;
