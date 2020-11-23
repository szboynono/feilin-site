<template>
  <div class="mx-auto my-8 px-8 flex flex-col justify-between my-container">
      <div class="w-56 m-auto" v-if="false">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          What is the password?
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
      </div>
    <div v-else>
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
  max-width: 2560px;
}
</style>

<script>
import { ref, watchEffect } from "vue";
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
  setup() {
    const locked = ref(true);
    const password = ref('');
    watchEffect(() => {
      if(password.value === '2020') {
        locked.value = false;
      }
    })
    return { locked, password };
  },
};
</script>