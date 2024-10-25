export const usePopupNoticeBookStore = defineStore("popup-notice-book", {
   state: () => ({
      isOpenPopupNotice: false,
   }),
   actions: {
      openPopup() {
         this.isOpenPopupNotice = !this.isOpenPopupNotice;
      },
      closePopup() {
         this.isOpenPopupNotice = !this.isOpenPopupNotice;
      },
   },
});
