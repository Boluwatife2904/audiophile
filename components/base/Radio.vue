<script setup lang="ts">
interface RadioInputProps {
	id: string;
	name: string;
	value: string | boolean;
	label?: string;
	disabled?: boolean;
}

const { value = "" } = defineProps<RadioInputProps>();

const modelValue = defineModel<string | boolean>();
const isChecked = computed(() => value === modelValue.value);
</script>

<template>
	<div class="base-radio">
		<input :id="id" v-model="modelValue" :value="value" type="radio" :name="name" :checked="isChecked" :disabled="disabled" />
		<label :for="id" class="flex items-center position-relative br-8" :class="{ disabled, 'has-label': !!label }">
			<span v-if="!!label" class="weight-700">{{ label }}</span>
		</label>
	</div>
</template>

<style lang="scss" scoped>
.base-radio {
	input[type="radio"] {
		&:checked,
		&:not(:checked) {
			display: none;
			position: absolute;
			left: -999rem;

			& + label {
				min-height: 5.6rem;
				cursor: pointer;
				border: 1px solid $input-border;
				padding: 1.8rem 1.6rem 1.8rem 5.2rem;
				transition: all 0.2s ease;

				@media screen and (min-width: 600px) {
					min-height: 3.2rem;
				}

				&:hover {
					border-color: $primary !important;
				}

				span {
					@include typography(1.4rem, normal);
					letter-spacing: -0.025rem;
				}

				&::before,
				&::after {
					content: "";
					position: absolute;
					border-radius: 50%;
				}

				&::before {
					@include component-size(2rem, 2rem);
					left: 1.6rem;
					top: 50%;
					transform: translateY(-50%);
					border: 0.1rem solid $input-border;
					background: transparent;
				}

				&::after {
					@include component-size(1rem, 1rem);
					background: $primary;
					top: 2.3rem;
					left: 2.2rem;
					transition: all 0.2s ease;
				}
			}
		}

		&:not(:checked) + label::after {
			transform: scale(0);
		}

		&:checked + label {
			border-color: $primary;

			&::after {
				transform: scale(1);
			}
		}
	}
}
</style>
