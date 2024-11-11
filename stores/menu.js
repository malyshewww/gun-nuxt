export const useMenuStore = defineStore("menu", {
   state: () => ({
      isOpenMenu: false,
   }),
   actions: {
      toggleMenu() {
         !document.body.classList.contains("lock") ? body_lock_add() : false;
         this.isOpenMenu = !this.isOpenMenu;
      },
   },
});
