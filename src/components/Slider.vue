<template>
  <b-container>
    <b-row
      align-h="center"
      align-w="center"
      style="max-width: 300px"
      align-self="center"
      class="mx-auto my-2"
    >
      <v-slider
        v-model="quantity"
        :min="min"
        :max="max"
        dark
        :step="step"
        hide-details
      >
        <template v-slot:prepend>
          <v-icon @click="decrement">
            mdi-minus
          </v-icon>
        </template>
        <template v-slot:append>
          <v-icon @click="increment">
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      step: 1,
      min: 2,
      max: 82,
      quantity: 42,
    };
  },
  watch: {
    quantity: function(newVal) {
      this.$emit("changeSize", newVal);
    },
  },
  methods: {
    decrement: function() {
      if (this.quantity > 2) {
        this.quantity -= 1;
        this.$emit("changeSize", this.quantity);
      } else {
        this.toast("Minimum");
      }
    },
    increment: function() {
      if (this.quantity < 82) {
        this.quantity += 1;
        this.$emit("changeSize", this.quantity);
      } else {
        this.toast("Maximum");
      }
    },
    toast: function(limit) {
      this.$bvToast.toast(`${limit} number of columns reached`, {
        autoHideDelay: 3000,
        variant: "light",
        toaster: "b-toaster-top-center",
        solid: true,
        className: ["toast"],
      });
    },
  },
};
</script>

<style scoped></style>
