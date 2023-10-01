<script setup lang="ts"></script>

<template>
	<div class="home">
		<HomeHero />
		<div class="home-content">
			<div class="container">
				<CategoriesList />
				<div class="home-content__products flex flex-column">
					<HomeZX9 />
					<HomeZX7 />
					<HomeYX1 />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	&-content {
		padding: 12rem 0 0;

		&__products {
			@include gap(3.2rem, 4.8rem);
			@include padding(12rem 0 0, 9.6rem 0 0, 16.8rem 0 0);
		}
	}
}
</style>
