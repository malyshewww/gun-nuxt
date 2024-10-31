export const usePopupNewsStore = defineStore("popup-news", {
   state: () => ({
      isOpenPopupNews: false,
   }),
   actions: {
      openPopupNews() {
         document.body.classList.add("lock");
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
      closePopupNews() {
         document.body.classList.remove("lock");
         this.isOpenPopupNews = !this.isOpenPopupNews;
      },
   },
});
