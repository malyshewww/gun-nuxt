export const usePopupNewsStore = defineStore("popup-news", {
   state: () => ({
      isOpenPopupNews: false,
   }),
   actions: {
      openPopupNews() {
         body_lock_add();
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
      closePopupNews() {
         body_lock_remove();
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
   },
});
