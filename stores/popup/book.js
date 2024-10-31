export const usePopupBookStore = defineStore("popup-book", {
   state: () => ({
      isOpenPopupBook: false,
   }),
   actions: {
      openPopup() {
         document.body.classList.add("lock");
         this.isOpenPopupBook = !this.isOpenPopupBook;
      },
      closePopup() {
         document.body.classList.remove("lock");
         this.isOpenPopupBook = !this.isOpenPopupBook;
      },
   },
});
