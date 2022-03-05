<template>
  <div class="container home">
    <h1>F*ck, Marry, Kill</h1>
    <div class="row">
      <div v-if="this.currentRound.length > 0">
        <figure class="figure col-md-3 center" v-for="contestant in currentRound" v-bind:key="contestant.id">
          <img v-bind:src="contestant.image" class="figure-img img-fluid rounded" />
          <figcaption class="figure-caption">{{ contestant.name }}</figcaption>
        </figure>
      </div>
      <div v-else>
        You've reached the end of the road!
        <button v-on:click="this.reset()">Reset Game</button>
      </div>
    </div>
    <button v-on:click="this.showRound()">Another One</button>
    <div class="row">
      <figure
        class="figure col-sm-1 center"
        v-for="completedContestant in completedRounds"
        v-bind:key="completedContestant.id"
      >
        <img v-bind:src="completedContestant.image" class="figure-img img-fluid rounded" />
        <figcaption class="figure-caption">{{ completedContestant.name }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentRound: [],
      completedRounds: [],
    };
  },
  mounted: function () {
    this.showRound();
    this.completedContestants();
  },
  methods: {
    showRound: function () {
      axios.get("/current-round").then((response) => {
        this.currentRound = response.data;
        console.log(this.currentRound);
      });
    },
    reset: function () {
      axios.get("/reset").then((response) => {
        console.log(response.data);
      });
    },
    completedContestants: function () {
      axios.get("/completed-rounds").then((response) => {
        this.completedRounds = response.data;
        console.log(this.completedRounds);
      });
    },
  },
};
</script>
