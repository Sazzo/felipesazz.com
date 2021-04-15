<template>
  <div
    class="grid grid-cols-heroMobile gap-8 items-center sm:grid-cols-hero sm:gap-64"
  >
    <div class="justify-self-center sm:justify-self-auto">
      <img src="~/assets/rezero_char.png" class="max-w-xs sm:max-w-md" />
    </div>
    <div class="font-main py-6 text-center space-y-3 sm:py-60 sm:text-left">
      <h2 class="text-blue text-xl">Hello there!</h2>
      <h1 class="text-weakwhite text-6xl">I'm Sazz</h1>
      <p
        class="text-white px-2 max-w-xl text-center sm:max-w-2xl sm:text-left sm:px-0"
      >
        I'm a full-stack developer (or at least trying), passionate about anime
        and building highly scalable things. I'm interested in DevOps and
        Elixir!
      </p>
      <div class="space-x-2">
        <Button value="Projects" />
        <Button value="Posts" />
      </div>
      <ChevronDown class="animate-bounce w-16 bottom-0" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChevronDown from './SVGS/ChevronDown.vue'
export default Vue.extend({
  components: {
    ChevronDown
  }
})
</script>
