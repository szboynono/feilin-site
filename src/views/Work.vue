<template>
  <div v-if="state.work" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div
      v-for="workImg in state.work.workImgs"
      :key="workImg.alt"
      class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-3 gallary-item"
    >
      <img :src="workImg.url" alt="" />
    </div>
    <!-- <div
      class="lg:col-start-2 sm:col-start-1 lg:col-span-1 sm:col-span-3 gallary-item"
    >
      <img :src="work.workImg2.url" :alt="work.workImg2.alt" />
    </div>
    <div
      class="gallary-item lg:col-start-3 sm:col-start-2 lg:col-span-1 sm:col-span-3"
    >
      <img :src="work.workImg3.url" :alt="work.workImg3.alt" />
    </div> -->
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 grid-row-1 gap-8 mt-16">
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-3">
      <p class="font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit modi, eos
        in optio dolorem accusantium vitae tenetur qui consectetur expedita
        libero. Odit similique est quibusdam aliquam vero, excepturi omnis
        velit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        dolore qui harum, molestias nihil vel. Voluptatem saepe asperiores ipsam
        enim hic debitis? Incidunt tempore consequuntur repellendus, quibusdam
        labore modi corporis!
      </p>
    </div>
  </div>
  <!-- <div class="grid grid-col-1 lg:grid-cols-3 grid-row-1 gap-8 mt-8">
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-3 tags">
      <a href="#" class="font-normal">#logo design</a>
      <a href="#" class="font-normal">#brand design</a>
      <a href="#" class="font-normal">#editorial design</a>
      <a href="#" class="font-normal">#web design</a>
    </div>
  </div> -->
  <div class="grid grid-col-1 lg:grid-cols-3 grid-row-1 gap-8 mt-16 mb-8">
    <div
      class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-3 flex justify-between"
    >
      <button class="text-2xl" @click="onBackClick">&#8249;</button>
      <button class="text-2xl" @click="onNextClick">&#8250;</button>
    </div>
  </div>
</template>

<style lang="css">
.gallary-item {
  height: auto;
  overflow: hidden;
}

.gallary-item img {
  width: 100%;
}

.tags a {
  color: #9a9a9a;
}
</style>

<script>
import { onMounted, reactive, ref } from "vue";
import router from "../router";
import store from "@/store";

export default {
  setup() {
    const work = ref();
    const state = reactive({
      work,
    });

    onMounted(() => {
      if(router.currentRoute.value.params.id) {
        work.value = store.getters.work(router.currentRoute.value.params.id);
      }
    })

    const onBackClick = () => {
      if (work.value.id !== "1") {
        let numericId = +work.value.id;
        numericId--;
        const nextWork = store.getters.work("" + numericId);
        router.push({ name: "Work", params: { id: nextWork.id } });
        work.value = nextWork;
      } else {
        const nextWork = store.getters.work("9");
        router.push({ name: "Work", params: { id: nextWork.id } });
        work.value = nextWork;
      }
      window.scrollTo(0, 0);
    };
    const onNextClick = () => {
      if (work.value.id !== "9") {
        let numericId = +work.value.id;
        numericId++;
        const nextWork = store.getters.work("" + numericId);
        router.push({ name: "Work", params: { id: nextWork.id } });
        work.value = nextWork;
      } else {
        const nextWork = store.getters.work("1");
        router.push({ name: "Work", params: { id: nextWork.id } });
        work.value = nextWork;
      }
      window.scrollTo(0, 0);
    };
    return { state, onBackClick, onNextClick };
  },
};
</script>
