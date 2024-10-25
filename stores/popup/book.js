export const usePopupBookStore = defineStore("popup-book", {
   state: () => ({
      isOpenPopupBook: false,
   }),
   actions: {
      openPopup() {
         this.isOpenPopupBook = !this.isOpenPopupBook;
      },
      closePopup() {
         this.isOpenPopupBook = !this.isOpenPopupBook;
      },
   },
});
