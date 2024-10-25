export const usePopupNoticeConsultationStore = defineStore(
   "popup-notice-consultation",
   {
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
   }
);
