<template>
	<section class="text-center">
		<p class="text-[1.89rem]">{{ data[props.checkIndex].desc }}</p>
		<div class="mt-[2rem]">
			<p class="font-bold text-bgDARK dark:text-bg">{{ data[props.checkIndex].job }}</p>
			<p class="text-blue-2props.checkIndex0 dark:text-blue-100dark">{{ data[props.checkIndex].name }}</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
	checkIndex: Number,
})

const data = reactive([
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
