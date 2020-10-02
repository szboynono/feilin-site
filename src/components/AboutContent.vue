<template>
  <header @click="headerClick">
    <slot name="header"></slot>
  </header>
  <div v-if="showContent" class="content border-t-2 border-gray-900 mt-8 font-normal">
    <slot name="content"></slot>
  </div>
</template>

<style lang="css">
header {
  cursor: pointer;
}
</style>

<script>
export default {
  props: ['showContent', 'contentId'],
  emits: ['title-clicked'],
  setup(props, ctx) {
    const headerClick = () => {
      ctx.emit('title-clicked', props.contentId);
    }
  
    return {headerClick}
  }
}
</script>