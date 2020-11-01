<template>
  <header @click="headerClick" class="border-b-2 border-gray-900 pb-8"
  >
    <slot name="header"></slot>
  </header>
  <div
    v-if="true"
    class="content font-normal before-animate"
    :class="{ 'expand': showContent }"
  >
    <slot name="content"></slot>
    <hr class="mt-8">
  </div>
</template>

<style lang="css">
header {
  cursor: pointer;
}
.content {
  transition: max-height .7s ease-in-out;
  height: auto;
  overflow: hidden;
  max-height: 0;
}
.expand {
  max-height: 800px;
}
hr {
  border: none;
  height: 2px;
  background:  #1a202c;
}
</style>

<script>
export default {
  props: ["showContent", "contentId"],
  emits: ["title-clicked"],
  setup(props, ctx) {
    const headerClick = () => {
      ctx.emit("title-clicked", props.contentId);
    };

    return { headerClick };
  },
};
</script>