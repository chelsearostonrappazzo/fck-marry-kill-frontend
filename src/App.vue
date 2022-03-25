<template>
  <nav>
    <router-link to="/">game</router-link>
    |
    <router-link to="/mostlikely">most likely to</router-link>
    |
    <router-link to="/fckmarrykill">fck, marry, kill</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
