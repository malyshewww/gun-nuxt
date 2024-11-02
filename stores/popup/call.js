export const usePopupCallStore = defineStore("popup-call", {
   state: () => ({
      isOpenPopup: false,
   }),
   actions: {
      openPopup() {
         document.body.classList.add("lock");
         this.isOpenPopup = !this.isOpenPopup;
      },
      closePopup() {
         document.body.classList.remove("lock");
         this.isOpenPopup = !this.isOpenPopup;
      },
   },
});
