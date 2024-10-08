export const usePopupDynamicStore = defineStore("popup-dynamic", {
   state: () => ({
      isOpenPopupDynamic: false,
   }),
   actions: {
      openPopupDynamic() {
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
      closePopupDynamic() {
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
   },
});
