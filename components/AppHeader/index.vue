<template lang="pug">
	header.header(ref="header" :class="[{'header-white': isWhite}, {'header-black': !isWhite}, {'menu-open': isOpenMenu}, {'hidden': !isVisible}]")
		.header__body
			AppHeaderLogo
			AppHeaderMenu(:is-open-menu="isOpenMenu" @close-menu="closeMenu")
			AppHeaderActions
			AppHeaderMenuTrigger(@openMenu="openMenu" :is-open-menu="isOpenMenu" data-da=".wrapper, 1025, 1")
</template>

<script setup>
import { useDynamicAdapt } from "~/utils/dynamic-adapt";

import { useMenuStore } from "~/stores/menu";

const storeMenu = useMenuStore();

const props = defineProps({
   isWhite: {
      type: Boolean,
      required: false,
      default: () => "",
   },
   isVisible: {
      type: Boolean,
      required: false,
      default: "",
   },
});

// watch(
//    () => props.isWhite,
//    (state, prevState) => {
//       console.log("с опцией deep ");
//    },
//    { deep: true }
// );

const header = ref("");

const isOpenMenu = ref(false);

const openMenu = () => {
   isOpenMenu.value = !isOpenMenu.value;
   document.body.classList.toggle("lock");
   storeMenu.toggleMenu();
};

const closeMenu = (e) => {
   const target = e.target;
   if (target.tagName === "A" && target.closest(".menu__link")) {
      isOpenMenu.value = false;
      document.body.classList.toggle("lock") &&
         document.body.classList.remove("lock");
   }
   storeMenu.toggleMenu();
};

onMounted(() => {
   useDynamicAdapt();
});
</script>

<style lang="scss">
.header {
   min-height: 80px;
   background-color: transparent;
   padding: 21px 56px;
   position: sticky;
   top: 0;
   width: 100%;
   z-index: 30;
   transition: transform $time, box-shadow $time;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--text-white);
      z-index: 21;
      opacity: 0;
      pointer-events: none;
      transition: opacity $time;
   }
   &.hidden {
      transform: translateY(-100%);
      pointer-events: none;
   }
   @media screen and (max-width: $xxxl) {
      padding: 21px 40px;
   }
   @media screen and (max-width: $xl) {
      padding: 15px 32px;
      min-height: 61px;
      &.menu-open {
         &::before {
            opacity: 1;
         }
      }
   }
   @media screen and (max-width: $md) {
      padding: 10.5px 15px;
      min-height: 48px;
   }
   .page--home & {
      position: fixed;
   }
   &:not(.header-white) {
      background-color: var(--text-white);
   }
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
   }
   &.header-white {
      isolation: isolate;
      color: var(--text-white);
      &::after {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: calc(100% + 20px);
         background: linear-gradient(
            180deg,
            #2b2f3b 0%,
            rgba(43, 47, 59, 0) 100%
         );
         opacity: 0.5;
         z-index: -1;
      }
      @media screen and (max-width: $xl) {
         color: var(--main-color);
         &.menu-open {
            & .logo-black {
               opacity: 1;
            }
            & .logo-white {
               opacity: 0;
            }
         }
      }
   }
   &.header-black {
      color: var(--main-color);
      background-color: var(--text-white);
      box-shadow: 0 0 10px 0 rgba(43, 47, 59, 0.05);
      &::before {
         opacity: 1;
      }
   }
}
</style>
