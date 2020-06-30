<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Buttons
      v-on:populate-array="populateArray"
      @bubble-sort="bubbleSort"
      @insertion-sort="insertionSort"
      @selection-sort="selectionSort"
      @quick-sort="quickSort"
      @test="test"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Data from "./components/Data.vue";
import Buttons from "./components/Buttons.vue";

export default {
  name: "App",
  components: {
    Header,
    Data,
    Buttons,
  },
  data() {
    return {
      numbers: [],
      primary: "dodgerblue",
      compare: "#66FCF1",
      sorted: "#A768C4",
    };
  },
  created() {
    this.populateArray();
  },
  methods: {
    populateArray: function() {
      this.numbers = [];

      for (let i = 0; i < 100; i++) {
        let value = Math.round(Math.random() * 90) + 10;
        let color = this.primary;
        this.numbers.push({ value, color });
      }
    },
    test: function() {
      // REMOVE ANY AWAIT KEYWORDS FOR TESTING
      for (let i = 0; i < 100; i++) {
        this.populateArray();
        let testArray = [...this.numbers];
        testArray.sort((a, b) => a.value - b.value);

        // test out different functions here
        // this.bubbleSort();
        // this.insertionSort();
        // this.selectionSort();
        // this.quickSort();

        let result =
          this.numbers.length === testArray.length &&
          this.numbers.every((num, i) => num.value === testArray[i].value);
        console.log(result);
      }
    },
    bubbleSort: async function() {
      let array = this.numbers;
      // change the color to primary to start sorting algorithm
      array.forEach((num, index) => {
        this.$set(array, index, {
          value: num.value,
          color: this.primary,
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
          this.$set(array, i, { value: a, color: this.compare });
          this.$set(array, i + 1, { value: b, color: this.compare });

          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 20));

          // if the first index is greater than the second
          if (array[i].value > array[i + 1].value) {
            swap = true;
            // swap indeces
            let { value, color } = array[i];
            let { value: tempValue } = array[i + 1];
            this.$set(array, i + 1, { value, color });
            this.$set(array, i, { value: tempValue, color });
          }

          // change colors back to primary and set the final index color to sorted
          let { value: newA } = array[i];
          let { value: newB } = array[i + 1];
          this.$set(array, i, { value: newA, color: this.primary });
          this.$set(array, i + 1, { value: newB, color: this.sorted });
        }
        // increment counter
        counter += 1;
      }
      // change the color to sorted on the final iteration
      array.forEach((num, index) => {
        this.$set(array, index, {
          value: num.value,
          color: this.sorted,
        });
      });
    },
    insertionSort: async function() {
      const array = this.numbers;
      // change the color to primary to start sorting algorithm
      array.forEach((num, index) => {
        this.$set(array, index, { value: num.value, color: this.primary });
      });

      for (let i = 1; i < array.length; i++) {
        let j = i;

        // highlight the values that are being compared
        let { value: a } = array[j];
        let { value: b } = array[j - 1];
        this.$set(array, j, { value: a, color: this.compare });
        this.$set(array, j - 1, { value: b, color: this.compare });

        // pauses the event loop to better visualize the algo
        await new Promise((resolve) => setTimeout(resolve, 20));

        // If the second value is greater than the first
        while (j > 0 && array[j].value < array[j - 1].value) {
          // swap the values
          let { value: a } = array[j];
          let { value: b } = array[j - 1];
          this.$set(array, j, { value: b, color: this.sorted });
          this.$set(array, j - 1, { value: a, color: this.compare });

          // highlight the next value to compare to
          if (array[j - 2]) {
            let { value } = array[j - 2];
            this.$set(array, j - 2, { value, color: this.compare });
          }

          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 20));

          j -= 1;
        }

        // pauses the event loop to better visualize the algo
        await new Promise((resolve) => setTimeout(resolve, 20));

        // sets colors to sorted
        if (array[j]) {
          let { value: a } = array[j];
          this.$set(array, j, { value: a, color: this.sorted });
        }
        if (array[j - 1]) {
          let { value: b } = array[j - 1];
          this.$set(array, j - 1, { value: b, color: this.sorted });
        }
      }
    },
    selectionSort: async function() {
      const array = this.numbers;
      let currentIdx = 0;
      while (currentIdx < array.length) {
        let smallestIdx = currentIdx;
        for (let i = currentIdx + 1; i < array.length; i++) {
          // highlight only the values that are being compared
          let { value } = array[currentIdx];
          this.$set(array, currentIdx, { value, color: this.compare });
          let { value: iIdx } = array[i];
          this.$set(array, i, { value: iIdx, color: this.compare });

          // // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 0.5));

          // If a value smaller than the value at smallestIdx is found
          if (array[i].value < array[smallestIdx].value) {
            // change the number at the smallest index to the primary color
            let { value } = array[smallestIdx];
            this.$set(array, smallestIdx, { value, color: this.primary });
            // smallest index now equals i
            smallestIdx = i;
            // Highlight the new smallest with gold
            let { value: iValue } = array[i];
            this.$set(array, i, { value: iValue, color: "gold" });
          }

          if (smallestIdx !== i) {
            // Change comparison color back to primary to highlight the next comparison
            this.$set(array, i, { value: iIdx, color: this.primary });
          }
        }

        if (smallestIdx !== currentIdx) {
          // Swap values and set sorted color
          let { value: a } = array[smallestIdx];
          let { value: b } = array[currentIdx];
          this.$set(array, smallestIdx, { value: b, color: this.primary });
          this.$set(array, currentIdx, { value: a, color: this.sorted });
        }
        // Set sorted color even if smallesIdx === currentIdx
        let { value } = array[currentIdx];
        this.$set(array, currentIdx, { value, color: this.sorted });

        currentIdx += 1;
      }
    },
    quickSort: async function(
      array = this.numbers,
      startIdx = 0,
      endIdx = array.length - 1
    ) {
      // if the array is less than length 2, return
      if (startIdx >= endIdx) {
        // change the colors of this array to sorted
        if (array[startIdx]) {
          let { value } = array[startIdx];
          this.$set(array, startIdx, { value, color: this.sorted });
        }
        if (array[endIdx]) {
          let { value } = array[endIdx];
          this.$set(array, endIdx, { value, color: this.sorted });
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
          num.color = this.primary;
        }
      });

      // set pivot color to be gold
      let { value } = array[pivot];
      this.$set(array, pivot, { value, color: "gold" });

      // while left pointer is less than or equal to right pivot
      while (left <= right) {
        // right and left pointers can be compare color
        let { value: l } = array[left];
        let { value: r } = array[right];
        this.$set(array, left, { value: l, color: this.compare });
        this.$set(array, right, { value: r, color: this.compare });

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
          this.$set(array, left, { value: r, color: array[left].color });
          this.$set(array, right, { value: l, color: array[right].color });
        }

        // pivot value is >= left pointer, increase left pointer
        if (array[pivot].value >= array[left].value) {
          let { value: newVal } = array[left];
          this.$set(array, left, { value: newVal, color: this.primary });
          left += 1;
        }

        // pivot value is <= right pointer, decrease right pointer
        if (array[pivot].value <= array[right].value) {
          let { value: newVal } = array[right];
          this.$set(array, right, { value: newVal, color: this.primary });
          right -= 1;
        }
      }

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 20));

      // Swap the values of pivot and right pointer
      let { value: p } = array[pivot];
      let { value: rValue } = array[right];
      this.$set(array, pivot, { value: rValue, color: this.compare });
      this.$set(array, right, { value: p, color: this.sorted });

      // find the smaller of the two remaining arrays
      let leftArrayIsSmaller = right - 1 - startIdx < endIdx - right + 1;

      // call quickSort on smallest remaining array first
      if (leftArrayIsSmaller) {
        this.quickSort(array, startIdx, right - 1);
        this.quickSort(array, right + 1, endIdx);
      } else {
        this.quickSort(array, right + 1, endIdx);
        this.quickSort(array, startIdx, right - 1);
      }

      return array;
    },
  },
};
</script>

<style>
* {
  background-color: #17252a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #feffff;
  margin-top: 60px;
}
</style>
