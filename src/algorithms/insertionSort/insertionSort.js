async function insertionSort(ref, array) {
  // change the color to primary to start sorting algorithm
  array.forEach((num, index) => {
    ref.$set(array, index, { value: num.value, color: ref.primary });
  });

  for (let i = 1; i < array.length; i++) {
    let j = i;

    // highlight the values that are being compared
    let { value: a } = array[j];
    let { value: b } = array[j - 1];
    ref.$set(array, j, { value: a, color: ref.compare });
    ref.$set(array, j - 1, { value: b, color: ref.compare });

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 30));

    // If the second value is greater than the first
    while (j > 0 && array[j].value < array[j - 1].value) {
      // swap the values
      let { value: a } = array[j];
      let { value: b } = array[j - 1];
      ref.$set(array, j, { value: b, color: ref.sorted });
      ref.$set(array, j - 1, { value: a, color: ref.compare });

      // highlight the next value to compare to
      if (array[j - 2]) {
        let { value } = array[j - 2];
        ref.$set(array, j - 2, { value, color: ref.compare });
      }

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));

      j -= 1;
    }

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 30));

    // sets colors to sorted
    if (array[j]) {
      let { value: a } = array[j];
      ref.$set(array, j, { value: a, color: ref.sorted });
    }
    if (array[j - 1]) {
      let { value: b } = array[j - 1];
      ref.$set(array, j - 1, { value: b, color: ref.sorted });
    }
  }
}

module.exports = insertionSort;
