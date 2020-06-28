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
    };
  },
  created() {
    this.populateArray();
  },
  methods: {
    populateArray: function() {
      this.numbers = [];
      // randomize the length of the array
      // let length = Math.round(Math.random() * 5) + 20;

      for (let i = 0; i < 25; i++) {
        let randomNumber = Math.round(Math.random() * 90) + 10;
        this.numbers.push(randomNumber);
      }
    },
    test: function() {
      for (let i = 0; i < 100; i++) {
        this.populateArray();
        let testArray = [...this.numbers];

        // test out different functions here
        this.bubbleSort();

        testArray.sort((a, b) => a - b);
        let result =
          this.numbers.length === testArray.length &&
          this.numbers.every((value, index) => value === testArray[index]);
        console.log(result);
      }
    },
    bubbleSort: function() {
      let swap = true;
      let counter = 0;

      while (swap) {
        swap = false;
        for (let i = 0; i < this.numbers.length - 1 - counter; i++) {
          if (this.numbers[i] > this.numbers[i + 1]) {
            swap = true;
            let placeholder = this.numbers[i + 1];
            this.$set(this.numbers, i + 1, this.numbers[i]);
            this.$set(this.numbers, i, placeholder);
          }
        }
        counter += 1;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
