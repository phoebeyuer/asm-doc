<script setup lang="ts">
import { ref } from 'vue'

const hello = ref('this is login')
</script>

<template>
  <div class="box">{{ hello }}</div>
</template>

<style lang="scss" scoped>
.box {
  color: $primaryColor;
}
</style>
