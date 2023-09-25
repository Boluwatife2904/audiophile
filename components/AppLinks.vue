<script setup lang="ts">
const links = [
	{ title: "home", name: "index" },
	{ title: "headphones", name: "categories-slug" },
	{ title: "speakers", name: "categories-slug" },
	{ title: "earphones", name: "categories-slug" },
];
</script>

<template>
	<ul class="app-links flex items-center flex-wrap">
		<li v-for="link in links" :key="link.title">
			<NuxtLink :to="{ name: link.name, ...(link.title !== 'home' && { params: { slug: link.title } }) }" class="base-link base-link--underline base-link--navigation">{{ link.title }}</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.app-links {
	flex-direction: column;
	@include gap(2rem 3.4rem);

	@media screen and (min-width: $tablet) {
		flex-direction: row;
	}
}
</style>
