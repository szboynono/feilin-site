<template>
  <div class="home grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8">
    <div class="gallary-item" v-for="item in 9" :key="item"></div>
  </div>
</template>
<style lang="css" scoped>
.gallary-item {
  height: 28vh;
  background-image: url(http://placekitten.com/800/600);
  background-position: center;
  background-size: cover;
}
</style>

<script>
export default {
  name: "Home",
};
</script>
