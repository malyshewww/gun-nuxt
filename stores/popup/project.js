export const usePopupProjectStore = defineStore("popup-project", {
   state: () => ({
      isOpenPopup: false,
   }),
   actions: {
      openPopup() {
         this.isOpenPopup = !this.isOpenPopup;
         document.body.classList.add("lock");
      },
      closePopup() {
         this.isOpenPopup = !this.isOpenPopup;
         document.body.classList.remove("lock");
      },
   },
});
