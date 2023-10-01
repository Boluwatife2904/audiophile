<script setup lang="ts">
interface Props {
	type?: string;
	id: string;
	label?: string;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
}

const { type = "text", placeholder = "", isInvalid = false } = defineProps<Props>();

const modelValue = defineModel<string>();
</script>

<template>
	<div class="base-input flex flex-column">
		<label :for="id" class="base-input__label weight-700 flex content-between items-center" :class="{ 'base-input__label--error': isInvalid }">
			{{ label }}
			<span v-if="isInvalid" class="base-input__error weight-500">Wrong format</span>
		</label>
		<input :type="type" :name="name" :id="id" :placeholder="placeholder" v-model="modelValue" class="base-input__element weight-700 body-small br-8 bg-white" :class="{ 'base-input__element--error': isInvalid }" />
	</div>
</template>

<style lang="scss" scoped>
.base-input {
	@include gap(0.9rem);

	&__label {
		@include typography(1.2rem, normal);

		&--error {
			color: #cd2c2c;
		}
	}

	&__element {
		padding: 1.65rem 2.4rem;
		border: 0.1rem solid $input-border;
		outline: none;
		letter-spacing: -0.025rem;
		transition: all 0.3s linear;
		width: 100%;

		&--error {
			border-color: #cd2c2c;
		}

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
