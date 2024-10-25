export const usePopupRequestStore = defineStore("popup-request", {
   state: () => ({
      isOpenPopupRequest: false,
   }),
   actions: {
      openPopup() {
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
      closePopup() {
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
   },
});
