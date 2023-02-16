import { defineStore } from "pinia";

export const useModalsStateStore = defineStore("modalsStateStore", {
  state: () => {
    return {
      registerModal: false,
    };
  },
  actions: {
    toggleRegisterModalForm() {
      this.registerModal = !this.registerModal;
    },
  },
  getters: {
    isRegisterModalOpen(): boolean {
      return this.registerModal;
    },
  },
});
