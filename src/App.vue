<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Buttons
      v-on:populate-array="populateArray"
      @bubble-sort="bubbleSort"
      @insertion-sort="insertionSort"
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
      // randomize the length of the array FOR TESTING
      // let length = Math.round(Math.random() * 5) + 20;

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

        let result =
          this.numbers.length === testArray.length &&
          this.numbers.every((num, i) => num.value === testArray[i].value);
        console.log(result);
      }
    },
    bubbleSort: async function() {
      // change the color to primary to start sorting algorithm
      this.numbers.forEach((num, index) => {
        this.$set(this.numbers, index, {
          value: num.value,
          color: this.primary,
        });
      });
      let counter = 0;
      let swap = true;

      while (counter < this.numbers.length && swap) {
        swap = false;
        for (let i = 0; i < this.numbers.length - 1 - counter; i++) {
          // change color of two indeces that are being compared
          let { value: a } = this.numbers[i];
          let { value: b } = this.numbers[i + 1];
          this.$set(this.numbers, i, { value: a, color: this.compare });
          this.$set(this.numbers, i + 1, { value: b, color: this.compare });

          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 10));

          // if the first index is greater than the second
          if (this.numbers[i].value > this.numbers[i + 1].value) {
            swap = true;
            // swap indeces
            let { value, color } = this.numbers[i];
            let { value: tempValue } = this.numbers[i + 1];
            this.$set(this.numbers, i + 1, { value, color });
            this.$set(this.numbers, i, { value: tempValue, color });
          }

          // change colors back to primary and set the final index color to sorted
          let { value: newA } = this.numbers[i];
          let { value: newB } = this.numbers[i + 1];
          this.$set(this.numbers, i, { value: newA, color: this.primary });
          this.$set(this.numbers, i + 1, { value: newB, color: this.sorted });
        }
        // increment counter
        counter += 1;
      }
      // change the color to sorted on the final iteration
      this.numbers.forEach((num, index) => {
        this.$set(this.numbers, index, {
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
        await new Promise((resolve) => setTimeout(resolve, 10));

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
          await new Promise((resolve) => setTimeout(resolve, 10));

          j -= 1;
        }

        // pauses the event loop to better visualize the algo
        await new Promise((resolve) => setTimeout(resolve, 10));

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
