export const useFilterStore = defineStore("filter", {
   state: () => ({
      isOpenFilter: false,
   }),
   actions: {
      openFilter() {
         this.isOpenFilter = !this.isOpenFilter;
      },
      closeFitler() {
         this.isOpenFilter = !this.isOpenFilter;
      },
   },
});
