export const useStore = defineStore("store", () => {
	const currentModal = ref("");

	const setCurrentModal = (modal: string) => {
		if (modal === currentModal.value) {
			currentModal.value = "";
			return;
		}
		currentModal.value = modal;
	};

	return { currentModal, setCurrentModal };
});
