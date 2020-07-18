<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Dropdown
      @new-array="populateArray"
      @bubble="bubble"
      @insertion="insertion"
      @selection="selection"
      @quick="quick"
      @heap="heap"
      @merge="merge"
    />
    <!-- <Buttons
      v-bind:wideView="wideView"
      @new-array="populateArray"
      @bubble="bubble"
      @insertion="insertion"
      @selection="selection"
      @quick="quick"
      @heap="heap"
      @merge="merge"
      @test="test"
    /> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueWindowSize from "vue-window-size";
Vue.use(VueWindowSize);

import Dropdown from "./components/Dropdown.vue";
import Header from "./components/Header.vue";
import Data from "./components/Data.vue";
// import Buttons from "./components/Buttons.vue";
import bubbleSort from "./algorithms/bubbleSort.js";
import insertionSort from "./algorithms/insertionSort.js";
import selectionSort from "./algorithms/selectionSort.js";
import quickSort from "./algorithms/quickSort.js";
import heapSort from "./algorithms/heapSort.js";
import mergeSort from "./algorithms/mergeSort.js";

export default {
  name: "App",
  components: {
    Header,
    Data,
    // Buttons,
    Dropdown,
  },
  data() {
    return {
      numbers: [],
      primary: "dodgerblue",
      compare: "#66FCF1",
      sorted: "#A768C4",
      lastAlgo: "",
      width: this.windowWidth,
    };
  },
  computed: {
    wideView: function() {
      return this.windowWidth > 500;
    },
  },
  created() {
    this.populateArray();
  },
  methods: {
    populateArray: function() {
      this.lastAlgo = "";
      this.numbers = [];
      const length = this.windowWidth > 650 ? 100 : 50;
      for (let i = 0; i < length; i++) {
        let value = Math.round(Math.random() * 250) + 10;
        let color = this.primary;
        this.numbers.push({ value, color });
      }
    },
    bubble: function() {
      this.lastAlgo = "bubble";
      bubbleSort(this, this.numbers);
    },
    insertion: function() {
      this.lastAlgo = "insertion";
      insertionSort(this, this.numbers);
    },
    selection: function() {
      this.lastAlgo = "selection";
      selectionSort(this, this.numbers);
    },
    quick: function() {
      this.lastAlgo = "quick";
      quickSort(this, this.numbers, 0, this.numbers.length - 1);
    },
    heap: function() {
      this.lastAlgo = "heap";
      heapSort(this, this.numbers);
    },
    merge: function() {
      this.lastAlgo = "merge";
      this.animate(mergeSort(this, this.numbers));
    },
    animate: async function(animations) {
      for (let todo of animations) {
        if (this.lastAlgo !== "merge") {
          break;
        }
        if (todo.action === "compare") {
          // changes the color of the two indexes being compared
          let { value: val1, color: col1 } = this.numbers[todo.idx1];
          let { value: val2, color: col2 } = this.numbers[todo.idx2];
          this.$set(this.numbers, todo.idx1, {
            value: val1,
            color: this.compare,
          });
          this.$set(this.numbers, todo.idx2, {
            value: val2,
            color: this.compare,
          });

          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 20));

          // changes the colors back to original color
          this.$set(this.numbers, todo.idx1, {
            value: val1,
            color: col1,
          });
          this.$set(this.numbers, todo.idx2, {
            value: val2,
            color: col2,
          });
        } else {
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 20));

          // overwrite idx1 with idx2, change color to sorted
          this.$set(this.numbers, todo.idx1, {
            value: todo.value,
            color: this.sorted,
          });
        }
      }
    },
    test: function() {
      // REMOVE ANY AWAIT KEYWORDS FOR PROPER TESTING //
      for (let i = 0; i < 100; i++) {
        this.populateArray();
        let testArray = [...this.numbers];
        testArray.sort((a, b) => a.value - b.value);

        // Choose an algorithm to test:
        // this.bubbleSort();
        // this.insertionSort();
        // this.selectionSort();
        // this.quickSort();
        // this.heap();
        // this.merge();

        let result =
          this.numbers.length === testArray.length &&
          this.numbers.every((num, i) => num.value === testArray[i].value);
        console.log(result);
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
