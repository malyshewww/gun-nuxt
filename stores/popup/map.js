export const usePopupMapStore = defineStore("popup-map", {
   state: () => ({
      isOpenPopup: false,
   }),
   actions: {
      openPopup() {
         body_lock_add();
         this.isOpenPopup = !this.isOpenPopup;
      },
      closePopup() {
         body_lock_remove();
         this.isOpenPopup = !this.isOpenPopup;
      },
   },
});
