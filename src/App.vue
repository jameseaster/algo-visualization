<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Buttons
      v-on:populate-array="populateArray"
      @bubble-sort="bubbleSort"
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

      for (let i = 0; i < 25; i++) {
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

        // test out different functions here
        // this.bubbleSort();

        testArray.sort((a, b) => a - b);
        let result =
          this.numbers.length === testArray.length &&
          this.numbers.every((value, index) => value === testArray[index]);
        console.log(result);
      }
    },
    bubbleSort: async function() {
      let counter = 0;

      while (counter < this.numbers.length) {
        for (let i = 0; i < this.numbers.length - 1 - counter; i++) {
          // change color of two indeces that are being compared
          let { value: a } = this.numbers[i];
          let { value: b } = this.numbers[i + 1];
          this.$set(this.numbers, i, { value: a, color: this.compare });
          this.$set(this.numbers, i + 1, { value: b, color: this.compare });

          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 50));

          // if the first index is greater than the second
          if (this.numbers[i].value > this.numbers[i + 1].value) {
            // swap indeces
            let { value, color } = this.numbers[i];
            let { value: tempValue } = this.numbers[i + 1];
            this.$set(this.numbers, i + 1, { value, color });
            this.$set(this.numbers, i, { value: tempValue, color });

            // pauses the event loop to better visualize the algo
            await new Promise((resolve) => setTimeout(resolve, 20));
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
      // change the color to sorted on the final iteration (first index)
      let { value } = this.numbers[0];
      this.$set(this.numbers, 0, { value, color: this.sorted });
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
