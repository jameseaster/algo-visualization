<template>
  <div id="app">
    <Header />
    <Data v-bind:numbers="numbers" />
    <Buttons v-on:populate-array="populateArray" />
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

      for (let i = 0; i < 25; i++) {
        let randomNumber = Math.round(Math.random() * 90) + 10;
        this.numbers.push(randomNumber);
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
