<template>
  <div class="container home center">
    <div class="row question-large col-sm-12 justify-content-center">
      <span style="color: #3eb489">who is</span>
      <span style="color: #a7c7e7"><b>most likely</b></span>
      <span style="color: #b39eb5">to</span>
      <span style="color: pink">{{ currentQuestion.content }}</span>
    </div>
    <button class="row btn btn-primary col-sm-2" v-on:click="this.showQuestion()">next</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentQuestion: {},
    };
  },
  mounted: function () {
    this.showQuestion();
  },
  methods: {
    showQuestion: function () {
      axios.get("/current-question").then((response) => {
        this.currentQuestion = response.data;
        console.log(this.currentQuestion);
      });
    },
  },
};
</script>
