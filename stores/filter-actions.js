export const useFilterStore = defineStore("filter", {
   state: () => ({
      isOpenFilter: false,
   }),
   actions: {
      openFilter() {
         this.isOpenFilter = !this.isOpenFilter;
         !document.body.classList.contains("lock")
            ? document.body.classList.add("lock")
            : false;
      },
      closeFitler() {
         this.isOpenFilter = !this.isOpenFilter;
      },
   },
});
