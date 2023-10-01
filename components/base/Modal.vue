<script setup lang="ts">
interface Props {
	usage?: string; // 'cart', 'menu', 'order'
}

interface Emits {
	(event: "close-modal"): void;
}

const { usage = "menu" } = defineProps<Props>();
const emits = defineEmits<Emits>();
const showModalContent = ref(false);
const showModalWrapper = ref(false);

const closeModal = () => {
	showModalContent.value = false;
	document.body.classList.remove("overflow-hidden");
	setTimeout(() => {
		showModalWrapper.value = false;
		emits("close-modal");
	}, 250);
};

onMounted(() => {
	showModalWrapper.value = true;
	showModalContent.value = true;
	document.body.classList.add("overflow-hidden");
});

onUnmounted(() => {
	document.body.classList.remove("overflow-hidden");
});
</script>

<template>
	<Teleport to="body">
		<Transition name="fade" mode="out-in" appear>
			<div v-if="showModalWrapper" class="base-modal cursor-pointer position-fixed" @click.self="closeModal">
				<div class="base-modal__container flex" :class="`base-modal__container--${usage}`" @click.self.stop="closeModal">
					<Transition name="slideUp" mode="out-in" appear>
						<div v-if="showModalContent" class="base-modal__content cursor-default bg-white br-8" :class="`base-modal__content--${usage}`">
							<div class="base-modal__body" :class="`base-modal__body--${usage}`">
								<slot />
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>
.base-modal {
	width: 100vw;
	height: calc(100vh - 9.7rem);
	background-color: rgb(0, 0, 0, 0.4);
	left: 0;
	bottom: 0;
	z-index: 10;
	overflow-y: auto;

	&__container {
		min-height: 100%;
		margin: auto;
		max-width: 117.4rem;

		&--cart {
			@include padding(3.2rem);
			align-items: start;
			justify-content: end;
		}

		&--menu {
			align-items: start;
			justify-content: start;
			padding-bottom: 3.2rem;
		}

		&--order {
			@include padding(3.2rem);
			align-items: center;
			justify-content: center;
		}
	}

	&__content {
		margin: 0;
		width: 100%;

		&--cart {
			max-width: 37.7rem;
		}

		&--menu {
			max-width: 100%;
			border-top-left-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}

		&--order {
			max-width: 54rem;
		}
	}

	&__body {
		overflow-y: auto;

		&--cart {
			@include padding(3.2rem 2.9rem 3.1rem 2.8rem, 3.2rem 3.1rem 3.1rem, 3.3rem);
		}

		&--menu {
			@include padding(4.4rem 2.4rem 6rem, 4.8rem 2.4rem 11.2rem);
		}

		&--order {
			@include padding(3.2rem, 4.8rem);
		}
	}
}
</style>
