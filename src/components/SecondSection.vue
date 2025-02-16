<template>
	<section class="text-center grid grid-rows-1 grid-columns-1">
		<div
			v-for="(item, index) in data"
			:key="index"
			class="col-span-full row-span-full transition-opacity duration-500"
			:class="index === props.checkIndex ? 'z-[10] opacity-1' : 'z-0 opacity-0'">
			<p class="text-[1.89rem] dark:text-bg">{{ item.desc }}</p>
			<div class="mt-[2rem]">
				<p class="font-bold text-bgDARK dark:text-bg">{{ item.job }}</p>
				<p class="text-blue-200 dark:text-blue-100dark">{{ item.name }}</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	checkIndex: Number,
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
