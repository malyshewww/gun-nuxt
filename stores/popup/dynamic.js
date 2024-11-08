export const usePopupDynamicStore = defineStore("popup-dynamic", {
   state: () => ({
      isOpenPopupDynamic: false,
   }),
   actions: {
      openPopupDynamic() {
         body_lock_add();
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
      closePopupDynamic() {
         body_lock_remove();
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
   },
});
