<template>
  <div class="container home center">
    <div class="row question-large col-sm-12 justify-content-center">
      <span style="color: #c1e1c1">who is</span>
      <span style="color: #a7c7e7"><b>most likely</b></span>
      <span style="color: #c3b1e1">to</span>
      <span style="color: #f79ac0">{{ currentQuestion.content }}</span>
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
