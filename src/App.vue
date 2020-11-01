<template>
  <div class="m-8 flex flex-col justify-between my-container">
    <div>
      <div class="grid grid-flow-col grid-cols-3 gap-8 mb-8">
        <h1>FEILIN DESIGN</h1>
        <router-link to="/">WORK</router-link>
        <router-link to="/about">ABOUT</router-link>
      </div>
      <router-view />
    </div>
    <div class="mt-8 footer">
      <router-link to="/">
        <Footer></Footer>
      </router-link>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
#app {
  font-family: "Manrope", sans-serif;
  font-weight: 800;
}

.my-container {
  min-height: 95vh;
  width: 100vw;
}
</style>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>