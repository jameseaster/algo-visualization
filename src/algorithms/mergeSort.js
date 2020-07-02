function mergeSort(ref, array) {
  // if array is 1 index or fewer, return
  if (array.length <= 1) return array;

  // create a copy of array
  let arrayCopy = [...array];

  // splits and swaps the arrays, also creates midIdx pointer
  mergeSortHelper(ref, array, 0, array.length - 1, arrayCopy);

  // returns the final sorted array
  return array;
}

function mergeSortHelper(ref, array, startIdx, endIdx, arrayCopy) {
  // if startIdx equals endIdx, return
  if (startIdx === endIdx) return;

  // find the middle index
  const midIdx = Math.floor((startIdx + endIdx) / 2);

  // swap the arrays, passing in midIdx to split them
  mergeSortHelper(ref, arrayCopy, startIdx, midIdx, array);
  mergeSortHelper(ref, arrayCopy, midIdx + 1, endIdx, array);

  // swap arrays back and merge them passing in all pointers
  mergeArrays(ref, array, startIdx, midIdx, endIdx, arrayCopy);
}

function mergeArrays(ref, array, startIdx, midIdx, endIdx, arrayCopy) {
  // beginning of left portion of array
  let i = startIdx;
  // beginning of right portion of array
  let j = midIdx + 1;
  // index to overwrite in main array
  let k = startIdx;

  // iterate over left and right side of arrayCopy, comparing values
  while (i <= midIdx && j <= endIdx) {
    // if index in left side < index on right side
    if (arrayCopy[i].value < arrayCopy[j].value) {
      // reassign main array to index from left side
      let { value } = arrayCopy[i];
      ref.$set(array, k, { value, color: ref.sorted });
      k += 1;
      i += 1;
    } else {
      // reassign main array to index from right side
      let { value } = arrayCopy[j];
      ref.$set(array, k, { value, color: ref.sorted });
      k += 1;
      j += 1;
    }
  }

  // if there are values remaining, overwrite array with them
  while (i <= midIdx) {
    let { value } = arrayCopy[i];
    ref.$set(array, k, { value, color: ref.sorted });
    k += 1;
    i += 1;
  }
  while (j <= endIdx) {
    let { value } = arrayCopy[j];
    ref.$set(array, k, { value, color: ref.sorted });
    k += 1;
    j += 1;
  }
}

module.exports = mergeSort;
