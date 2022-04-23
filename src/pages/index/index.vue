<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { userInfoStore } from '@/store/user'
import bus from '@/lib/bus'

console.log(bus)
const userInfo = userInfoStore()
// bus.emit('test', 'xxxxxxxx')
bus.on('test', (e) => console.log(e + '22222'))

setTimeout(() => {
  userInfo.setUserInfo({
    id: '1111',
    username: '55555555',
    avater: '',
    token: '',
    roles: [],
  })
  userInfo.$patch({
    test: '2222222222222222',
  })
}, 3 * 1000)
</script>

<template>
  <div class="box">
    <HelloWorld msg="hello world, happy!" />
    <div>用户名： {{ userInfo.userInfo.username }}</div>
    <div>用户名长度：{{ userInfo.nameLength }}</div>
    <div>测试： {{ userInfo.test }}</div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style lang="scss" scoped>
.box {
  color: $primaryColor;
}
</style>
