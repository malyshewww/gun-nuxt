export const usePopupBookStore = defineStore("popup-book", {
   state: () => ({
      isOpenPopupBook: false,
      isErrorName: true,
      isErrorPhone: false,
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
      showErrorName() {
         this.isErrorName = !this.isErrorName;
      },
      removeErrorName() {
         this.isErrorName = !this.isErrorName;
      },
      showErrorPhone() {
         this.isErrorPhone = true;
      },
      removeErrorPhone() {
         this.isErrorPhone = false;
      },
   },
});
