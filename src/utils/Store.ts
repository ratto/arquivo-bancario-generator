import { defineStore } from 'pinia';

export const useConfigStore = defineStore('general', {
  state: () => ({
    drawerOpen: false,
  }),
  getters: {
    drawerStatus: (state) => state.drawerOpen,
  },
  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
});
