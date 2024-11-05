export const useMenuStore = defineStore("menu", {
   state: () => ({
      isOpenMenu: false,
   }),
   actions: {
      toggleMenu() {
         this.isOpenMenu = !this.isOpenMenu;
      },
   },
});
