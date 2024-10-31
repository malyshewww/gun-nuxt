export const usePopupConsultationStore = defineStore("popup-consultation", {
   state: () => ({
      isOpenPopupConsultation: false,
   }),
   actions: {
      openPopup() {
         document.body.classList.add("lock");
         this.isOpenPopupConsultation = !this.isOpenPopupConsultation;
      },
      closePopup() {
         document.body.classList.remove("lock");
         this.isOpenPopupConsultation = !this.isOpenPopupConsultation;
      },
   },
});
