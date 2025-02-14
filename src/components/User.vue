<template>
	<h1>Tytuł</h1>
	<ul>
		<li>Name: {{ props.name }}</li>
		<li>Race: {{ props.race }}</li>
        <li>Age: {{props.age}}</li>
        <li>Father: {{ props.parents.father }}</li>
        <li>Mother: {{ props.parents.mother }}</li>
	</ul>
</template>

<script setup>
const props = defineProps({
	name: String,
	race: String,
    age: Number,
    parents: Object
})
</script>
