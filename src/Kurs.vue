<template>
	<div :class="colors"></div>
	<p :class="[classes.text, 'z-100 relative']" :style="[classes.newStyle]">Lorem, ipsum dolor.</p>
	<div :class="[classes.tail]"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const colors = ref({
	blue: true,
	red: false,
})
const classes = ref({
	blue: 'royalblue',
	text: 'font-bold',
	w: '300px',
	newStyle: {
		fontSize: '50px',
		color: 'gold',
	},
	tail: 'w-[30rem] h-[30rem] bg-gray',
})
</script>
<style></style>
