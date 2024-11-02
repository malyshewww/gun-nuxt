export const useFilterStore = defineStore("filter", {
   state: () => ({
      isOpenFilter: false,
   }),
   actions: {
      openFilter() {
         this.isOpenFilter = !this.isOpenFilter;
         document.body.classList.toggle("lock");
      },
      closeFitler() {
         this.isOpenFilter = !this.isOpenFilter;
         document.body.classList.remove("lock");
      },
   },
});
