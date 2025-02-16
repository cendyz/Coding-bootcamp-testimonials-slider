<template>
	<Nav :isChecked="isChecked" @changeThemeValue="isChecked = $event" />
	<main
		class="grid gap-y-[8rem] p-[2rem] py-[5.7rem] pb-[12rem] container lg:place-items-center lg:grid-cols-[1fr_auto_auto] lg:grid-rows-1">
		<FirstSection @passCheckIndex="checkIndex = $event" />
		<SecondSection :checkIndex="checkIndex" :isChecked="isChecked" />
	</main>
	<img :src="pattern" alt="" aria-hidden="true" class="absolute bottom-0 left-0 lg:w-[40%]" />
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import Nav from './components/Nav.vue'
import FirstSection from './components/FirstSection.vue'
import SecondSection from './components/SecondSection.vue'
import pattern from '@/images/pattern-curve.svg'

const checkIndex = ref(0)
const isChecked = ref(null)
const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

watchEffect(() => {
	if (currentTheme) {
		document.documentElement.classList.add('dark')
		document.documentElement.classList.remove('light')
		isChecked.value = false
	} else {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
		isChecked.value = true
	}
})
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
