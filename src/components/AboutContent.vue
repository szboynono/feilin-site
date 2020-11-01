<template>
  <header @click="headerClick" class="border-b-2 border-gray-900 pb-8">
    <slot name="header"></slot>
  </header>
  <div
    v-if="true"
    class="content font-normal before-animate"
    :class="{ 'expand border-b-2 border-gray-900 pb-8': showContent }"
  >
    <slot name="content"></slot>
  </div>
</template>

<style lang="css">
header {
  cursor: pointer;
  transition: border 0.5s ease;
}
.content {
  transition: all 0.5s ease;
  height: auto;
  overflow: hidden;
  max-height: 0;
}
.expand {
  max-height: 800px;
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