<template>
  <div class="home grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-8">
    <div
      class="gallary-item"
      v-for="work in works"
      :key="work.id"
      :style="{ backgroundImage: `url(${work.imgUrl})` }"
      @click="onImageClick(work.id)"
    ></div>
  </div>
</template>
<style lang="css" scoped>
.gallary-item {
  height: 26vh;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

@media only screen and (min-width: 1441px) {
  .gallary-item {
    height: 27vh;
  }
}
</style>

<script>
import router from "../router";

export default {
  name: "Home",
  setup() {
    const works = [
      {
        id: "pig",
        imgUrl: "https://loremflickr.com/800/600/pig",
      },
      {
        id: "cat",
        imgUrl: "https://loremflickr.com/800/600/cat",
      },
      {
        id: "dog",
        imgUrl: "https://loremflickr.com/800/600/dog",
      },
      {
        id: "lion",
        imgUrl: "https://loremflickr.com/800/600/lion",
      },
      {
        id: "fish",
        imgUrl: "https://loremflickr.com/800/600/fish",
      },
      {
        id: "horse",
        imgUrl: "https://loremflickr.com/800/600/horse",
      },
      {
        id: "gun",
        imgUrl: "https://loremflickr.com/800/600/gun",
      },
      {
        id: "girl",
        imgUrl: "https://loremflickr.com/800/600/girl",
      },
      {
        id: "apple",
        imgUrl: "https://loremflickr.com/800/600/bird",
      },
    ];

    const onImageClick = (id) => {
      if(id) {
        router.push({ name: "Work", params: { id, imgUrl: works.find(work => work.id === id).imgUrl } });
      }
    };

    return {
      works,
      onImageClick,
    };
  },
};
</script>
