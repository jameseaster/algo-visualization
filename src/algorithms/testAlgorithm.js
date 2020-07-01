function testAlgorithm(ref, array) {
  // REMOVE ANY AWAIT KEYWORDS FOR TESTING //
  for (let i = 0; i < 100; i++) {
    ref.populateArray();
    let testArray = [...array];
    testArray.sort((a, b) => a.value - b.value);

    // Choose an algorithm to test:
    // ref.bubbleSort();
    // ref.insertionSort();
    // ref.selectionSort();
    // ref.quickSort();
    // ref.heap();

    let result =
      array.length === testArray.length &&
      array.every((num, i) => num.value === testArray[i].value);
    console.log(result);
  }
}

module.exports = testAlgorithm;
