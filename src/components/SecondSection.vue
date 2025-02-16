<template>
	<section
		class="relative text-center grid grid-rows-1 grid-columns-1 lg:col-[1/3] lg:row-span-full lg:z-[100] lg:mr-[18rem] lg:max-w-[43rem] lg:text-left lg:mt-[8rem]">
		<div
			v-for="(item, index) in data"
			:key="index"
			class="col-span-full row-span-full transition-opacity duration-200"
			:class="index === props.checkIndex ? 'z-[10] opacity-1' : 'z-0 opacity-0'">
			<p class="text-[1.89rem] text-bgDARK dark:text-[#8E8EB7] font-inter300 lg:text-[2.3rem]">
				{{ item.desc }}
			</p>
			<div class="mt-[2rem]">
				<p class="font-bold text-bgDARK dark:text-bg">{{ item.job }}</p>
				<p class="text-[#4242CA] dark:text-blue-100dark">{{ item.name }}</p>
			</div>
		</div>
		<img :src="quotes" alt="" aria-hidden="true" class="absolute top-[-12%] left-1/2 translate-x-[-50%] w-[7rem] lg:w-[10rem] lg:left-[28%] lg:top-[-22%]">
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import quotes from '@/images/pattern-quotes.svg'

const props = defineProps({
	checkIndex: Number,
	isChecked: Boolean,
})

const data = ref([
	{
		name: 'Tanya Sinclair',
		job: 'UX Engineer',
		desc: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
	},
	{
		name: 'John Tarkpor',
		job: 'Junior Front-end Developer',
		desc: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
	},
	{
		name: 'Tom Cat',
		job: 'CSS Overlord & Animation Expert',
		desc: '“ Every time I think I fixed a CSS issue, Jerry finds a new screen size to break it. ”',
	},
	{
		name: 'Jerry Mouse',
		job: 'Full Cheese Stack Developer',
		desc: '“ I optimize my code like I optimize my cheese supply: never waste a single byte! ”',
	},
])
</script>

<style lang="scss">
.textShadow {
	text-shadow: 3px 3px 7px rgb(0, 0, 0);
}
</style>
