export const usePopupRequestStore = defineStore("popup-request", {
   state: () => ({
      isOpenPopupRequest: false,
   }),
   actions: {
      openPopup() {
         body_lock_add();
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
      closePopup() {
         body_lock_remove();
         this.isOpenPopupRequest = !this.isOpenPopupRequest;
      },
   },
});
