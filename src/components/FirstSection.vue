<template>
	<section class="grid grid-rows-[1fr_auto_auto] grid-columns-1 lg:order-1 lg:col-[2/4] lg:row-span-full lg:relative">
		<img
			:src="pattern"
			alt=""
			aria-hidden="true"
			class="absolute left-1/2 translate-x-[-50%] top-[3rem] w-[32rem] lg:scale-[1.8] lg:top-[6.5rem]" />

		<img
			v-for="(item, index) in data"
			:src="item.img"
			alt=""
			:key="index"
			class="av1 col-span-full row-[1/3] block mx-auto w-[25rem] rounded-lg lg:w-[44rem]"
			:class="checkIndex === index ? 'z-[50] opacity-1' : 'z-0 opacity-0'" />
		<div
			class="row-[2/4] col-[1/2] mx-auto bg-bg dark:bg-bgDARK border-[2px] border-white relative z-[100] flex items-center gap-x-[1.2rem] rounded-full lg:left-[-29%]">
			<button @click="goPrevious">
				<img :src="left" alt="previous" class="p-[1.1rem] w-[3.5rem]" />
			</button>
			<button @click="goNext"><img :src="right" alt="next" class="p-[1.1rem] w-[3.5rem]" /></button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeUpdate } from 'vue'
import pattern from '@/images/pattern-bg.svg'
import left from '@/images/icon-prev.svg'
import right from '@/images/icon-next.svg'
import tanya from '@/images/image-tanya.jpg'
import john from '@/images/image-john.jpg'
import tom from '@/images/tom.jpg'
import jerry from '@/images/jerry.jpg'

const data = ref([
	{
		img: tanya,
		alt: 'Tanya',
	},
	{
		img: john,
		alt: 'John',
	},
	{
		img: tom,
		alt: 'Tom',
	},
	{
		img: jerry,
		alt: 'Jerry',
	},
])

const emit = defineEmits(['passCheckIndex'])

const checkIndex = ref(0)

const goNext = (): void => {
	if (checkIndex.value + 1 === data.value.length) {
		checkIndex.value = 0
	} else {
		checkIndex.value++
	}
}

const goPrevious = (): void => {
	if (checkIndex.value === 0) {
		checkIndex.value = data.value.length - 1
	} else {
		checkIndex.value--
	}
}

onBeforeUpdate(() => {
	emit('passCheckIndex', checkIndex.value)
})
</script>

<style lang="scss">
.av1 {
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
