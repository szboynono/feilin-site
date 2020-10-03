<template>
  <div class="m-8 flex flex-col justify-between min-h-screen">
    <div>
      <div class="grid grid-flow-col grid-cols-3 gap-8 mb-8">
        <h1><router-link to="/">FEILIN DESIGN</router-link></h1>
        <router-link to="/work">WORK</router-link>
        <router-link to="/about">ABOUT</router-link>
      </div>
      <router-view />
    </div>
    <div class="mt-8 footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
#app {
  font-family: "Manrope", sans-serif;
  font-weight: 800;
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