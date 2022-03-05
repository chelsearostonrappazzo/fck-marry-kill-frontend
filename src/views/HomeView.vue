<template>
  <div class="container home">
    <h1>F*ck, Marry, Kill</h1>

    <button class="btn btn-primary" v-show="!startGame" v-on:click="startGame = true">Let's go, girls!</button>
    <div class="row" v-show="startGame">
      <div v-if="this.currentRound.length > 0">
        <figure class="figure col-md-3 center" v-for="contestant in currentRound" v-bind:key="contestant.id">
          <img v-bind:src="contestant.image" class="figure-img img-fluid rounded" />
          <figcaption class="figure-caption">{{ contestant.name }}</figcaption>
        </figure>
        <button class="btn btn-primary" v-on:click="this.showRound()">Another One</button>
        <button class="btn btn-primary" v-on:click="this.reset()">Reset Game</button>
      </div>
      <div v-else>
        You've reached the end of the road! Click reset to start again!
        <button class="btn btn-primary" v-on:click="this.reset()">Reset Game</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentRound: [],
      startGame: false,
    };
  },
  mounted: function () {
    this.showRound();
  },
  methods: {
    showRound: function () {
      axios.get("/current-round").then((response) => {
        this.currentRound = response.data;
        console.log(this.currentRound);
      });
    },
    reset: function () {
      axios.get("/reset").then(() => {
        window.location.reload();
      });
    },
  },
};
</script>
