<script setup lang="ts">
interface Props {
	id: string;
	label?: string;
	name: string;
	placeholder?: string;
}

const { placeholder = "" } = defineProps<Props>();
</script>

<template>
	<div class="base-input flex flex-column">
		<label :for="id" class="base-input__label weight-700">{{ label }}</label>
		<input type="text" :name="name" :id="id" :placeholder="placeholder" class="base-input__element weight-700 body-small br-8 bg-white" />
	</div>
</template>

<style lang="scss" scoped>
.base-input {
	@include gap(0.9rem);

	&__label {
		@include typography(1.2rem, normal);
	}

	&__element {
		padding: 1.65rem 2.4rem;
		border: 0.1rem solid $input-border;
		outline: none;
		letter-spacing: -0.025rem;
		transition: all .3s linear;

		&::placeholder {
			color: rgba(0, 0, 0, 0.4);
		}

		&:active,
		&:focus {
			border-color: $primary;
		}
	}
}
</style>
