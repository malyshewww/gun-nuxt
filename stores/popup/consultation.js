export const usePopupConsultationStore = defineStore("popup-consultation", {
   state: () => ({
      isOpenPopupConsultation: false,
   }),
   actions: {
      openPopup() {
         this.isOpenPopupConsultation = !this.isOpenPopupConsultation;
      },
      closePopup() {
         this.isOpenPopupConsultation = !this.isOpenPopupConsultation;
      },
   },
});
