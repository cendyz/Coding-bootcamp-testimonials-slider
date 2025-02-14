<template>
	<main class="p-[2rem] xl:flex container xl:w-[75%] xl:items-center xl:relative">
		<section class="relative grid grid-cols-[1fr] grid-rows-[1fr_auto_auto] xl:order-1 xl:w-[183.2rem] xl:self-start">
			<img :src="pattern" alt="" class="absolute top-[1%] left-1/2 translate-x-[-50%] scale-95 xl:scale-[1.4]" />

			<img
				:src="data[index].img"
				:alt="data[index].alt + ' profile picture'"
				class="avatar scale-[.75] rounded-3xl col-[1/2] row-[1/3] mx-auto w-[50rem] xl:scale-[1.1] z-10" />

			<div
				class="grid-cols-1 grid-col-[1/2] col-[1/2] row-[2/4] bg-white mx-auto flex z-10 gap-x-[3rem] w-fit p-[1rem] rounded-full xl:absolute xl:left-[11%] xl:p-[1.3rem]">
				<button>
					<img :src="left" alt="previous" class="scale-[.8] xl:scale-[1] cursor-pointer" @click="goPrevious" />
				</button>
				<button><img :src="right" alt="next" class="scale-[.8] xl:scale-[1] cursor-pointer" @click="goNext" /></button>
			</div>
		</section>
		<section class="p-[2rem] text-center mt-[2rem] pt-[4.5rem] relative xl:w-[200rem] xl:text-left z-20">
			<div class="xl:absolute xl:top-1/2 xl:translate-y-[-45%] xl:left-[10%] xl:w-[49.5rem]">
				<img
					:src="quotes"
					alt=""
					class="absolute left-1/2 top-0 scale-[.5] translate-x-[-50%] xl:scale-[.7] xl:left-[26%]" />
				<p class="font-inter300 text-[1.7rem] relative xl:text-[2.6rem]">{{ data[index].desc }}</p>
				<div class="xl:flex xl:gap-x-[1rem] xl:items-center xl:mt-[2rem]">
					<p class="font-inter700 mt-[1.5rem] text-[1.4rem] xl:mt-0 xl:text-[1.6rem]">{{ data[index].name }}</p>
					<p class="text-[1.4rem] text-blue-0 xl:text-[1.6rem]">{{ data[index].job }}</p>
				</div>
			</div>
		</section>
	</main>
	<img :src="downPattern" alt="" class="absolute w-full left-0 bottom-0 xl:w-[43%]" />
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
import { reactive, ref} from 'vue'
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

const goPrevious = (): void => {
	if (index.value === 0) {
		index.value = Object.keys(data).length - 1
	} else {
		index.value--
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
