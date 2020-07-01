<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Buttons
      @new-array="populateArray"
      @bubble="bubble"
      @insertion="insertion"
      @selection="selection"
      @quick="quick"
      @heap="heap"
      @test="test"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Data from "./components/Data.vue";
import Buttons from "./components/Buttons.vue";
import bubbleSort from "./algorithms/bubbleSort.js";
import insertionSort from "./algorithms/insertionSort.js";
import selectionSort from "./algorithms/selectionSort.js";
import quickSort from "./algorithms/quickSort.js";
import heapSort from "./algorithms/heapSort.js";
import testAlgorithm from "./algorithms/testAlgorithm.js";

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
      const length = 50;
      for (let i = 0; i < length; i++) {
        let value = Math.round(Math.random() * 90) + 10;
        let color = this.primary;
        this.numbers.push({ value, color });
      }
    },
    bubble: function() {
      bubbleSort(this, this.numbers);
    },
    insertion: function() {
      insertionSort(this, this.numbers);
    },
    selection: function() {
      selectionSort(this, this.numbers);
    },
    quick: async function() {
      quickSort(this, this.numbers, 0, this.numbers.length - 1);
    },
    heap: function() {
      heapSort(this, this.numbers);
    },
    test: function() {
      // REMOVE ANY AWAIT KEYWORDS FOR TESTING //
      testAlgorithm(this, this.numbers);
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
