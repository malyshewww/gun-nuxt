export const usePopupRequestStore = defineStore("popup-request", {
   state: () => ({
      isOpenPopupRequest: false,
   }),
   actions: {
      openPopup() {
         document.body.classList.add("lock");
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
      closePopup() {
         document.body.classList.remove("lock");
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
   },
});
