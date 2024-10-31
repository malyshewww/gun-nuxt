export const usePopupMapPlaceStore = defineStore("popup-map-place", {
   state: () => ({
      isOpenPopupPlace: false,
      locationId: 0,
   }),
   actions: {
      openPopup() {
         document.body.classList.add("lock");
         this.isOpenPopupPlace = !this.isOpenPopupPlace;
      },
      closePopup() {
         document.body.classList.remove("lock");
         this.isOpenPopupPlace = !this.isOpenPopupPlace;
      },
      newLocationId(num) {
         this.locationId = num;
      },
   },
});
