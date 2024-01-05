<template>
  <div class="container home">
    <button
      class="btn btn-primary start-game"
      v-show="!startGame"
      v-on:click="startGame = true"
    >
      let's go, girls!
    </button>
    <div class="row" v-show="startGame">
      <div v-if="this.allMen.length > 0">
        <figure
          class="figure col-md-3 center"
          v-for="contestant in allMen"
          v-bind:key="contestant.id"
        >
          <img
            v-bind:src="contestant.image"
            class="figure-img img-fluid rounded"
          />
          <figcaption class="figure-caption">{{ contestant.name }}</figcaption>
        </figure>
        <div class="row justify-content-center">
          <button class="btn btn-primary col-sm-2" v-on:click="this.indexMen()">
            another one
          </button>
          <button class="btn btn-primary col-sm-2" v-on:click="this.reset()">
            reset game
          </button>
        </div>
      </div>
      <div v-else>
        You've reached the end of the road! Click reset to start again!
        <button class="btn btn-primary" v-on:click="this.reset()">
          reset Game
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      allMen: [],
      startGame: false,
    };
  },
  mounted: function () {
    this.indexMen();
  },
  methods: {
    indexMen: function () {
      axios.get("/top-round").then((response) => {
        this.allMen = response.data;
        console.log(this.allMen);
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
