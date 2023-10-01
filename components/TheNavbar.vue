<script setup lang="ts">
const { setCurrentModal } = useStore();
const route = useRoute();
</script>

<template>
	<nav class="base-nav" :class="[route.name === 'index' ? 'bg-transparrent' : 'bg-black', { sticky: route.name !== 'index' }]">
		<div class="container">
			<div class="base-nav__content flex items-center content-between text-white">
				<div class="base-nav--left flex items-center">
					<button class="base-nav__toggler position-relative flex flex-column item-start" title="Hamburger" @click="setCurrentModal('menu')">
						<span class="bg-white block"></span>
						<span class="bg-white block"></span>
						<span class="bg-white block"></span>
					</button>
					<span class="logo-1"><AppLogo /></span>
				</div>
				<div class="base-nav--center flex items-center">
					<span class="logo-2"><AppLogo /></span>
					<span class="links"><AppLinks /></span>
				</div>
				<div class="base-nav--right">
					<button class="lh-0" title="Cart" @click="setCurrentModal('cart')"><IconCart /></button>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.base-nav {
	position: relative;
	z-index: 100;

	&.sticky {
		position: sticky;
		top: 0;
	}

	&__content {
		@include padding(3.5rem 0 3.7rem);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	&__toggler {
		@include visibility(flex, flex, none);
		gap: 0.3rem;

		span {
			width: 1.6rem;
			height: 0.3rem;
		}
	}

	&--left {
		@include gap(4.2rem);
	}
}

.logo-1 {
	@include visibility(none, block, block);
}

.logo-2 {
	@include visibility(block, none, none);
}

.links {
	@include visibility(none, none, block);
}
</style>
