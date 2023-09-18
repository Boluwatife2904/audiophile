<script setup lang="ts">
interface Props {
	variant?: string;
}

const { variant = "primary" } = defineProps<Props>();

const buttonClasses = computed(() => {
	return ["variant"].map((item) => {
		if (item === "variant") return `base-button--${variant}`;
	});
});
</script>

<template>
	<button class="base-button weight-700 text-uppercase" :class="buttonClasses">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.base-button {
	@include typography(1.3rem, normal);
	padding: 1.5rem 2.95rem 1.5rem 3.15rem;
	letter-spacing: 0.1rem;

	&--primary {
		@include component-variant($primary, $white, transparent, $primary-light);
	}

	&--secondary {
		@include component-variant($black, $white, transparent, #4c4c4c, $white, transparent);
	}

	&--secondary-outline {
		@include component-variant(transparent, $black, $black, $black, $white, $black);
	}
}
</style>
