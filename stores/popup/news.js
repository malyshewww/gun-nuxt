export const usePopupNewsStore = defineStore("popup-news", {
   state: () => ({
      isOpenPopupNews: false,
   }),
   actions: {
      openPopupNews() {
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
      closePopupNews() {
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
   },
});
