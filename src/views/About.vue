<template>
  <div class="about grid grid-col-1 lg:grid-cols-3 gap-8">
    <div
      class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-3 text-3xl font-normal border-b-2 border-gray-900 pb-8"
    >
      Feilin Fu is a graphic designer based out of Toronto, currently working as a full-time designer at No Fixed Address. She is a passionate designer who is truly committed to the craft and execution of beautiful, considered typography and design. As a designer, Feilin spreads her talents across a wide variety of creative disciplines, including new brand lunch, corporate identity, editorial design, market collateral, package design and some digital executions, and more.
    </div>
    <div class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-3">
      <about-content :showContent="contentState[0]" :contentId='0' @title-clicked="onTitleClick">
        <template #header> EXPERIENCE </template>
        <template #content>
          <div class="mt-8">
            <p>No Fixed Address (NFA) - January 2020 - Present</p>
            <p>Designer</p>
          </div>
          <div class="mt-8">
            <p>Grip Limited – May 2018 - January 2020</p>
            <p>Junior Designer</p>
          </div>
          <div class="mt-8">
            <p>良品设计 (CGI) - May 2017 - August 2017</p>
            <p>Graphic Designer</p>
          </div>
          <div class="mt-8">
            <p>OCAD University - September 2016 - May 2017</p>
            <p>Editorial Designer</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-32">
      <about-content :showContent="contentState[1]" :contentId='1' @title-clicked="onTitleClick">
        <template #header> AWARDS & RECONGNITION </template>
        <template #content>
          <div class="mt-8">
            <p>Creative Report Card Ranked #61 Designer - 2020</p>
          </div>
          <div class="mt-8">
            <p>ADCC Sliver - 2019</p>
          </div>
          <div class="mt-8">
            <p>ADCC Sliver - 2019</p>
          </div>
          <div class="mt-8">
            <p>Communication Arts Finalist - 2019</p>
          </div>
          <div class="mt-8">
            <p>Strategy Online Marketing Awards Merit - 2019</p>
          </div>
          <div class="mt-8">
            <p>Benjamin Franklin Award - 2019</p>
          </div>
          <div class="mt-8">
            <p>Trudell Medical Packaging Finalist - 2018</p>
          </div>
          <div class="mt-8">
            <p>ADCC Merit - 2018</p>
          </div>
          <div class="mt-8">
            <p>ADCC Merit - 2017</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-3">
      <about-content :showContent="contentState[2]" :contentId='2' @title-clicked="onTitleClick">
        <template #header> PUBLICATIONS </template>
        <template #content>
          <div class="mt-8">
            <p>Applied Arts Magazine - 2019</p>
          </div>
          <div class="mt-8">
            <p>Communication Arts - 2019</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-3">
      <about-content :showContent="contentState[3]" :contentId='3' @title-clicked="onTitleClick">
        <template #header> SELECT CLIENTS </template>
        <template #content>
          <div class="mt-8">
            <p>Acura / Aurora Cannabis / Allergan / Dare / Dairy Farmers of Ontario / J.P.Wisers / KFC / Lindt / Medreleaf / Mattamy Homes / Queenston Mile Vineyard / RBC / Grip Sound+Picture</p>
          </div>
        </template>
      </about-content>
    </div>
    <div class="lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-3">
      <about-content :showContent="contentState[4]" :contentId='4' @title-clicked="onTitleClick">
        <template #header> CONTACT </template>
        <template #content>
          <div class="mt-8">
            <p>Email: feilinfu729@gmail.com</p>
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
