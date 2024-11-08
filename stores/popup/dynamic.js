import {
   body_lock,
   body_lock_add,
   body_lock_remove,
} from "~/composables/bodyLock";

export const usePopupDynamicStore = defineStore("popup-dynamic", {
   state: () => ({
      isOpenPopupDynamic: false,
   }),
   actions: {
      openPopupDynamic() {
         document.body.classList.add("lock");
         // body_lock_add();
         // document.documentElement.style.overflowY = "hidden";
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
      closePopupDynamic() {
         // document.documentElement.style.overflowY = "";
         document.body.classList.remove("lock");
         // body_lock_remove();
         this.isOpenPopupDynamic = !this.isOpenPopupDynamic;
      },
   },
});
