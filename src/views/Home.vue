<template>
  <div class="home grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-8">
    <div
      class="gallary-item"
      :style="{ cursor: isDisabled(work.id) ? 'default' : 'pointer'}"
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

.gallary-item-diabled {
  width: 100%;
  height: 412px;
  cursor: default;
}

@media only screen and (min-width: 1441px) {
}
</style>

<script>
import router from "../router";
import store from "@/store";
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const works = store.getters.works;
    const url = ref('../assets/images/mattamy/logo-1.png');

    const isDisabled = (id) => {
      const foundWork = works.find(work => work.id === id)
      return foundWork.disable
    }

    const onImageClick = (id) => {
      if (id && !isDisabled(id)) {
        router.push({ name: "Work", params: { id } });
      }
    };

    return {
      onImageClick,
      works,
      url,
      isDisabled
    };
  },
};
</script>
