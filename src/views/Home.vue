<template>
  <div class="home grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-8">
    <div
      class="gallary-item"
      v-for="work in works"
      :key="work.id"
      @click="onImageClick(work.id)"
    >
      <img :src="work.homeImg.url" :alt="work.homeImg.alt" />
    </div>
  </div>
</template>
<style lang="css" scoped>
.gallary-item {
  width: 100%;
  height: auto;
  cursor: pointer;
}

@media only screen and (min-width: 1441px) {
}
</style>

<script>
import router from "../router";
import store from "@/store";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  setup() {
    const works = store.getters.works;
    const url = ref('../assets/images/mattamy/logo-1.png');
    onMounted(() => {
      console.log(works);
    });
    const onImageClick = (id) => {
      if (id) {
        router.push({ name: "Work", params: { id } });
      }
    };

    return {
      onImageClick,
      works,
      url
    };
  },
};
</script>
