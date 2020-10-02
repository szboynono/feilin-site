<template>
  <div class="about grid grid-col-1 lg:grid-cols-3 grid-row-5 gap-8">
    <div
      class="col-start-2 col-span-2 text-3xl font-normal border-b-2 border-gray-900 pb-8"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
      reprehenderit odit dolorum neque incidunt, suscipit corrupti nobis
      distinctio sequi, blanditiis error deleniti eveniet eos culpa sint magnam
      expedita unde laborum. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Corporis eaque fuga, voluptatibus perferendis sapiente deserunt vel
      exercitationem suscipit ducimus voluptate voluptates vero dolor ipsam
      inventore, quidem pariatur excepturi, molestiae ut?
    </div>
    <div class="col-start-2 col-span-2 border-b-2 border-gray-900 pb-8">
      <about-content :showContent="contentState[0]" :contentId='0' @title-clicked="onTitleClick">
        <template #header> EXPERIENCE </template>
        <template #content>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="col-start-2 col-span-2 border-b-2 border-gray-900 pb-8">
      <about-content :showContent="contentState[1]" :contentId='1' @title-clicked="onTitleClick">
        <template #header> AWARDS & RECONGNITION </template>
        <template #content>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="col-start-2 col-span-2 border-b-2 border-gray-900 pb-8">
      <about-content :showContent="contentState[2]" :contentId='2' @title-clicked="onTitleClick">
        <template #header> SELECT CLIENTS </template>
        <template #content>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="col-start-2 col-span-2 border-b-2 border-gray-900 pb-8">
      <about-content :showContent="contentState[3]" :contentId='3' @title-clicked="onTitleClick">
        <template #header> CONTACT </template>
        <template #content>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
          <div class="mt-8">
            <p>Freelance - 2017 - Present</p>
            <p>Senior Designer</p>
          </div>
        </template>
      </about-content>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import AboutContent from "../components/AboutContent";

export default {
  components: {
    AboutContent,
  },
  setup() {
    const contentState = ref([false, false, false, false, false])
    const onTitleClick = index => contentState.value[index] = !contentState.value[index];
    return {contentState, onTitleClick}
  }
};
</script>
