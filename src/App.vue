<script setup lang="ts">
import bus from '@/lib/bus'

bus.on('test', (e) => console.log(e + '啊哈'))
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <!-- <router-view v-slot="{ Component }">
		<transition name="el-fade-in-linear">
			<component :is="Component"/>
		</transition>
	</router-view> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryColor;
  margin-top: 60px;
}
</style>
