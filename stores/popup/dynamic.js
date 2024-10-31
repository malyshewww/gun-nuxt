export const usePopupDynamicStore = defineStore("popup-dynamic", {
   state: () => ({
      isOpenPopupDynamic: false,
   }),
   actions: {
      openPopupDynamic() {
         document.body.classList.add("lock");
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
      closePopupDynamic() {
         document.body.classList.remove("lock");
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
   },
});
