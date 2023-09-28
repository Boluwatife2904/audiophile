<script setup lang="ts">
const { setCurrentModal } = useStore();
</script>

<template>
	<BaseModal usage="menu" @close-modal="setCurrentModal('')">
		<CategoriesList />
	</BaseModal>
</template>

<style scoped></style>
