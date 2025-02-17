<template>
	<main class="card container p-[1.5rem] rounded-none">
		<section class="flex gap-x-[2rem] border-b-[2px] pb-[1.5rem] mb-[2.5rem]">
			<button class="btn" :class="btnStyles" @click="isTrue = true">Users</button>
			<button class="btn bg-[royalblue]" :class="btnStyles" @click="isTrue = false">Add user</button>
		</section>
		<div :class="isLoading || isError ? 'flex items-center w-full h-[50vw]' : ''">
			<span class="loading loading-spinner w-[5rem] mx-auto" v-if="isLoading"></span>
			<div role="alert" class="alert alert-error w-fit mx-auto" v-if="isError">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span>Something went wrong.</span>
			</div>
			<Transition mode="out-in">
				<section class="p-[1rem] flex justify-center gap-[4rem] flex-wrap" v-if="isTrue && !isLoading">
					<div class="card bg-base-100 w-96 shadow-xl" v-for="(item, index) in dataArr" :key="index">
						<figure>
							<img
								:src="
									item.img ||
									'https://static.wikia.nocookie.net/pldragonball/images/6/6e/Goku_w_Sadze_Android%C3%B3w.jpg'
								"
								alt="girl"
								class="w-full h-[24rem] object-fill" />
						</figure>
						<div class="card-body">
							<h2 class="card-title font-bold text-white">{{ item.name }} {{ item.lastname }}</h2>
							<p class="text-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
				</section>
				<section class="p-[1rem] grid gap-x-[2rem]" v-else-if="!isTrue && !isLoading">
					<form class="card gap-y-[2rem] bg-black w-fit p-[1.8rem]" @submit.prevent="handleSubmit">
						<div>
							<label for="name" class="mb-[.3rem] block text-white">Name:</label>
							<input type="text" placeholder="Type here" v-model="inputData.name" :class="inputStyles" id="name" />
						</div>
						<div>
							<label for="surrname" class="mb-[.3rem] block text-white">Surrname: </label>
							<input
								type="text"
								v-model="inputData.lastname"
								placeholder="Type here"
								:class="inputStyles"
								id="surrname" />
						</div>
						<button
							class="btn no-animation h-auto py-[1.1rem] text-[1.5rem] self-start text-white bg-[royalblue]"
							type="submit">
							Add
						</button>
					</form>
				</section>
			</Transition>
		</div>
	</main>
</template>

<script setup lang="ts">
import axios from 'axios'
import { nanoid } from 'nanoid'
import { onMounted, ref, reactive } from 'vue'
const btnStyles: string = 'btn text-white text-[1.7rem] outline-none px-[2rem] py-[1rem] h-auto'
const inputStyles: string =
	'input input-bordered input-success w-full max-w-xs block text-[1.4rem] p-x-[2rem] py-[1.8rem]'
const isTrue = ref<boolean>(true)
const nekoImg = ref<string>('')
const dataArr = ref<any[]>([])
const isLoading = ref<boolean>(true)
const isError = ref<boolean>(false)
const dataUrl: string = 'http://localhost:3000/users'
const imgUrl: string = 'https://nekos.life/api/v2/img/neko'
const inputData: { name: string; lastname: string; id: string } = reactive({
	name: '',
	lastname: '',
	id: nanoid(),
})


const fetchUsers = async (): Promise<void> => {
	try {
		const response = await axios(dataUrl, {
			headers: {
				Accept: 'application/json',
			},
		})
		const imgResponse = await axios(imgUrl)
		dataArr.value = response.data
		nekoImg.value = imgResponse.data.url
		isLoading.value = false
	} catch (error) {
		isLoading.value = false
		isError.value = true
		console.log(error)
	}
}

const handleSubmit = async () => {
	try {
		await axios.post(dataUrl, inputData)
		fetchUsers()
        inputData.name = ''
        inputData.lastname = ''
		inputData.id = nanoid()
	} catch (error) {
		console.log(console.error)
	}
}

onMounted(() => {
	fetchUsers()
})
</script>

<style lang="scss">
.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.15s;
}

.v-enter-to,
.v-leave-from {
	opacity: 1;
}
</style>
