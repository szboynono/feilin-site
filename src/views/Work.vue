<template>
  <div class="work grid grid-cols-1 lg:grid-cols-3 grid-rows-4 gap-8">
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-12 gallary-item"></div>
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-1 sm:col-span-12 gallary-item"></div>
    <div class="gallary-item lg:col-start-3 sm:col-start-2 lg:col-span-1 sm:col-span-12 "></div>
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-12 gallary-item"></div>
    <div class="lg:col-start-2 sm:col-start-1 lg:col-span-2 sm:col-span-12 gallary-item"></div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 grid-row-1 gap-8 mt-8">
    <div class="col-start-2 col-span-2">
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
  <div class="grid grid-col-1 lg:grid-cols-3 grid-row-1 gap-8 my-8">
    <div class="col-start-2 col-span-2 flex justify-between">
      <button class="text-2xl">&#8249;</button>
      <button class="text-2xl">&#8250;</button>
    </div>
  </div>
</template>

<style lang="css">
.gallary-item {
  height: 510px;
  background-image: url(http://placekitten.com/800/600);
  background-position: center;
  background-size: cover;
}

@media only screen and (min-width: 1441px) {
  .gallary-item {
    height: 800px;
  }
}
</style>
