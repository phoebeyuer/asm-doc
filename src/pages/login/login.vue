<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import bus from '@/lib/bus'

console.log(bus)
const hello = ref<string>('this is login')
const test = ref<string>('')
bus.emit('test', 'xxxxxxxx')
// test.value = bus.all.get('test')
// bus.on('test', e => console.log(e + '哈哈哈啊哈'))

// console.log('11111111')
// onBeforeUnmount(() => {
// 	bus.off('test', testFn)
// })
</script>

<template>
  <div class="box">{{ hello }}</div>
  <div>{{ test }}</div>
</template>

<style lang="scss" scoped>
.box {
  color: $primaryColor;
}
</style>
