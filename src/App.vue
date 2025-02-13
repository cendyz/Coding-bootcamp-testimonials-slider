<template>
	<main class="p-[2rem]">
		<section class="relative grid grid-cols-[1fr] grid-rows-[.868fr_auto_auto]">
			<img :src="pattern" alt="" class="absolute top-[1%] left-1/2 translate-x-[-50%] scale-95" />
			<Transition>
				<img
					v-if="index !== null"
					:key="index"
					:src="data[index].img"
					:alt="data[index].alt + ' profile picture'"
					class="avatar scale-[.75] rounded-3xl col-[1/2] row-[1/3] mx-auto" />
			</Transition>
			<div
				class="grid-cols-1 grid-col-[1/2] col-[1/2] row-[2/4] bg-white mx-auto flex z-10 gap-x-[3rem] w-fit p-[1rem] rounded-full">
				<button><img :src="left" alt="previous" class="scale-[.8] cursor-pointer" /></button>
				<button><img :src="right" alt="next" class="scale-[.8] cursor-pointer" @clBick="goNext" /></button>
			</div>
		</section>
		<section class="p-[2rem] text-center mt-[2rem] pt-[4.5rem] relative">
			<img :src="quotes" alt="" class="absolute left-1/2 top-0 scale-[.5] translate-x-[-50%]" />
			<p class="font-inter300 text-[1.7rem] relativeW">{{ data[index].desc }}</p>
			<p class="font-inter700 mt-[1.5rem] text-[1.4rem]">{{ data[index].name }}</p>
			<p class="text-[1.4rem] text-blue-0">{{ data[index].job }}</p>
		</section>
		<img :src="downPattern" alt="" class="absolute w-full left-0" />
	</main>
</template>

<script setup lang="ts">
import pattern from '@/images/pattern-bg.svg'
import tanya from '@/images/image-tanya.jpg'
import john from '@/images/image-john.jpg'
import right from '@/images/icon-next.svg'
import left from '@/images/icon-prev.svg'
import downPattern from '@/images/pattern-curve.svg'
import quotes from '@/images/pattern-quotes.svg'
import jerry from '@/images/jerry.jpg'
import tom from '@/images/tom.jpg'
import { reactive, ref } from 'vue'
let index = ref(0)
const data = reactive({
	0: {
		name: 'Tanya Sinclair',
		job: 'UX Engineer',
		img: tanya,
		alt: 'Tanya',
		desc: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
	},
	1: {
		name: 'John Tarkpor',
		job: 'Junior Front-end Developer',
		img: john,
		alt: 'John',
		desc: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
	},
	2: {
		name: 'Tom Cat',
		job: 'CSS Overlord & Animation Expert',
		img: tom,
		alt: 'Tom',
		desc: '“ Every time I think I fixed a CSS issue, Jerry finds a new screen size to break it. ”',
	},
	3: {
		name: 'Jerry Mouse',
		job: 'Full Cheese Stack Developer',
		img: jerry,
		alt: 'Jerry',
		desc: '“ I optimize my code like I optimize my cheese supply: never waste a single byte! ”',
	},
})

const goNext = (): void => {
	if (Object.keys(data).length - 1 === index.value) {
		index.value = 0
	} else {
		index.value++
	}
}
</script>

<style lang="scss">
@use './sass/reset.scss';
.avatar {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s;
}

.v-enter-to,
.v-leave-from {
	opacity: 1;
}
</style>
