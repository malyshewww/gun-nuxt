<template lang="pug">
	.header__menu.menu(:class="{active: isOpenMenu}")
		nav.menu__body
			ul.menu__list 
				li.menu__item(v-for="(item, index) in menu" :key="index")
					nuxt-link(:to="{ path: item.path, hash: `${item.hash ? item.hash : ''}`}").menu__link {{item.title}}
		nav.menu__dropdown.dropdown-menu(:class="{active: isDropdownMenuActive}")
			.dropdown-menu__button(@click="openDropdownMenu")
			.dropdown-menu__list-wrap
				ul.dropdown-menu__list
					li.menu__item(v-for="(item, index) in menu" :key="index")
						nuxt-link(:to="{ path: item.path, hash: `${item.hash ? item.hash : ''}`}").menu__link {{item.title}}
</template>
<script setup>
const props = defineProps({
   isOpenMenu: {
      type: Boolean,
      required: true,
   },
});
const menu = inject("menu");

const isDropdownMenuActive = ref(false);

const openDropdownMenu = () => {
   isDropdownMenuActive.value = !isDropdownMenuActive.value;
};

onMounted(() => {
   const menu = document.querySelector(".menu"),
      menuVisible = document.querySelector(".menu__body .menu__list"),
      menuHidden = document.querySelector(
         ".menu__dropdown .dropdown-menu__list"
      ),
      dropdownMenu = document.querySelector(".dropdown-menu"),
      breaks = [];
   const updateNav = () => {
      const navWidth = dropdownMenu.classList.contains("hidden")
         ? menu.offsetWidth
         : menu.offsetWidth - dropdownMenu.offsetWidth - 48;
      const menuVisibleWidth = menuVisible.offsetWidth;
      if (menuVisibleWidth > navWidth) {
         breaks.push(menuVisibleWidth);
         menuHidden.prepend(menuVisible.lastElementChild);
         dropdownMenu.classList.remove("hidden");
         updateNav();
      } else {
         if (navWidth < breaks[breaks.length - 1]) {
            breaks.pop();
            menuVisible.append(menuHidden.firstElementChild);
         }
         if (breaks.length < 1) {
            dropdownMenu.classList.add("hidden");
         }
      }
   };
   // updateNav();
   // window.addEventListener("resize", updateNav);
   // window.addEventListener("DOMContentLoaded", updateNav);

   // const updateLinks = () => {
   //    const menuItems = [...menuVisible.querySelectorAll(".menu__item")];
   //    const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
   //    const lastFourElements = takeRight(menuItems, 4);
   //    if (window.innerWidth <= 1400 && window.innerWidth > 1024) {
   //       lastFourElements.forEach((item) => {
   //          menuHidden.append(item);
   //       });
   //    }
   // };
   // updateLinks();
});
</script>

<style lang="scss" scoped>
.menu {
   display: flex;
   align-items: center;
   gap: 20px;
   max-width: 930px;
   width: 100%;
   @media screen and (max-width: $xxxl) {
      max-width: 100%;
      flex-grow: 1;
      justify-content: center;
   }
   @media screen and (max-width: $xl) {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 103px 32px 60px;
      background-color: var(--text-white);
      align-items: flex-start;
      transform: translateX(110%);
      transition: transform 0.6s;
      &.active {
         transform: translateX(0);
      }
   }
   @media screen and (max-width: $md) {
      justify-content: flex-start;
      padding: 90px 15px 60px;
   }
   &__body {
      flex-shrink: 0;
      @media screen and (max-width: $xxxl) {
         & .menu__item:nth-child(n + 4) {
            display: none;
         }
      }
      @media screen and (max-width: $xl) {
         flex-shrink: 1;
         & .menu__item:nth-child(n + 4) {
            display: block;
         }
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 20px;
      @media screen and (max-width: $xl) {
         flex-direction: column;
      }
      @media screen and (max-width: $md) {
         align-items: flex-start;
      }
   }
   &__item {
   }
   &__link {
      font-family: var(--font-family);
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      transition: color $time ease 0s;
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-avocado);
         }
      }
   }
}
.dropdown-menu {
   position: relative;
   flex-shrink: 0;
   display: none;
   @media screen and (max-width: $xxxl) {
      display: block;
      & .menu__item:nth-child(-n + 3) {
         display: none;
      }
   }
   @media screen and (max-width: $xl) {
      display: none;
   }
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
         & .dropdown-menu__list-wrap {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transform: translate3d(0, 0, 0);
         }
      }
   }
   &.active {
      & .dropdown-menu__list-wrap {
         &__list {
            opacity: 1;
            pointer-events: all;
            visibility: visible;
            transform: translate3d(0, 0, 0);
         }
      }
   }
   &__button {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      overflow: hidden;
      &::before {
         content: "";
         display: block;
         width: 4px;
         height: 4px;
         border-radius: 50%;
         background-color: currentColor;
         box-shadow: 7px 0px 0px currentColor, -7px 0px 0px currentColor;
         transition: background-color $time, box-shadow $time;
      }
   }
   &__list-wrap {
      position: absolute;
      top: 100%;
      width: 186px;
      border-radius: 8px;
      padding-top: 16px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translate3d(0, 20px, 0);
      transition: opacity $time, visibility $time, transform $time;
   }
   &__list {
      @include reset-list;
      background: var(--text-white);
      padding: 24px 28px;
      display: grid;
      grid-template-columns: 100%;
      justify-items: center;
      gap: 20px;
      box-shadow: 0 0 50px 0 rgba(43, 47, 59, 0.2);
   }
}
</style>
