<template>
  <button class="bg-indigo-500 text-white rounded w-36 p-2">
    {{ value }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['value']
})
</script>
