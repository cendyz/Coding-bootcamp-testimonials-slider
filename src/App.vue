<template>
	<main class="p-[2rem]">
		<section class="relative grid grid-cols-[1fr] grid-rows-[.868fr_auto_auto]">
			<img :src="pattern" alt="" class="absolute top-[1%] left-1/2 translate-x-[-50%] scale-95" />
			<img :src="tanya" alt="" class="avatar scale-[.75] rounded-3xl col-[1/2] row-[1/3]" />
			<div
				class="grid-cols-1 grid-col-[1/2] col-[1/2] row-[2/4] bg-white mx-auto flex z-10 gap-x-[3rem] w-fit p-[1rem] rounded-full">
				<button><img :src="left" alt="previous" class="scale-[.8] cursor-pointer" /></button>
				<button><img :src="right" alt="next" class="scale-[.8] cursor-pointer" /></button>
			</div>
		</section>
		<section class="p-[2rem] text-center mt-[2rem] pt-[4.5rem] relative">
			<img :src="quotes" alt="" class="absolute left-1/2 top-0 scale-[.5] translate-x-[-50%]" />
			<p class="font-inter300 text-[1.7rem] relative">
				“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this
				course enough. I’m now in the job of my dreams and so excited about the future. ”
			</p>
			<p class="font-inter700 mt-[1.5rem] text-[1.4rem]">Tanya Sinclair</p>
			<p class="text-[1.4rem] text-blue-0">UX Engineer</p>
		</section>
		<img :src="downPattern" alt="" class="absolute w-full left-0" />
	</main>
</template>

<script setup lang="ts">
import pattern from '@/images/pattern-bg.svg'
import tanya from '@/images/image-tanya.jpg'
import right from '@/images/icon-next.svg'
import left from '@/images/icon-prev.svg'
import downPattern from '@/images/pattern-curve.svg'
import quotes from '@/images/pattern-quotes.svg'
import { nanoid } from 'nanoid'
import { reactive, ref, computed } from 'vue'
</script>

<style lang="scss">
@use './sass/reset.scss';
.avatar {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
