<template>
  <div class="home grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-8">
    <div class="gallary-item" v-for="item in 9" :key="item"></div>
  </div>
</template>
<style lang="css" scoped>
.gallary-item {
  height: 26vh;
  background-image: url(http://placekitten.com/800/600);
  background-position: center;
  background-size: cover;
}

@media only screen and (min-width: 1441px) {
  .gallary-item {
    height: 27vh;
  }
}
</style>

<script>
export default {
  name: "Home",
};
</script>
