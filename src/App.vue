<template>
<div class="m-8">
  <div class="grid grid-flow-col grid-cols-3 gap-8 mb-8">
    <router-link to="/">Home</router-link>
    <router-link to="/">Work</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <div class="mt-8">
    footer goes here
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
