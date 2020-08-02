async function bubbleSort(ref, array) {
  // change the color to primary to start sorting algorithm
  array.forEach((num, index) => {
    ref.$set(array, index, {
      value: num.value,
      color: ref.primary,
    });
  });
  let counter = 0;
  let swap = true;

  while (counter < array.length && swap) {
    swap = false;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      // change color of two indeces that are being compared
      let { value: a } = array[i];
      let { value: b } = array[i + 1];
      ref.$set(array, i, { value: a, color: ref.compare });
      ref.$set(array, i + 1, { value: b, color: ref.compare });

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));

      // if the first index is greater than the second
      if (array[i].value > array[i + 1].value) {
        swap = true;
        // swap indeces
        let { value, color } = array[i];
        let { value: tempValue } = array[i + 1];
        ref.$set(array, i + 1, { value, color });
        ref.$set(array, i, { value: tempValue, color });
      }

      // change colors back to primary and set the final index color to sorted
      let { value: newA } = array[i];
      let { value: newB } = array[i + 1];
      ref.$set(array, i, { value: newA, color: ref.primary });
      ref.$set(array, i + 1, { value: newB, color: ref.sorted });
    }
    // increment counter
    counter += 1;
  }
  // change the color to sorted on the final iteration
  array.forEach((num, index) => {
    ref.$set(array, index, {
      value: num.value,
      color: ref.sorted,
    });
  });
}

module.exports = bubbleSort;
