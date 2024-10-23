<template lang="pug">
	.button-up-container
		button(type="button" @click="scrollTop" :class="{active: isActiveButtonUp}").button-up
</template>

<script setup>
const scrollTop = () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
};
const isActiveButtonUp = ref(false);

const instanceObserver = () => {
   const mainHero = document.querySelector(".main-hero");
   if (mainHero) {
      const options = {
         rootMargin: "0px 0px 0px 0px",
         threshold: 0,
      };
      const observer = new IntersectionObserver(([entry]) => {
         const targetInfo = entry.boundingClientRect;
         const rootBoundsInfo = entry.rootBounds;
         if (targetInfo?.top >= rootBoundsInfo?.top) {
            isActiveButtonUp.value = !isActiveButtonUp.value;
         } else {
            isActiveButtonUp.value = !isActiveButtonUp.value;
         }
      }, options);
      observer.observe(mainHero);
   }
};
onMounted(() => {
   instanceObserver();
});
</script>

<style lang="scss" scoped>
.button-up-container {
   position: sticky;
   bottom: 0px;
   z-index: 10;
   right: 36px;
   display: flex;
   justify-content: flex-end;
   width: 100%;
   padding: 0px 36px 80px;
   visibility: hidden;
}
.button-up {
   width: 48px;
   height: 48px;
   flex-shrink: 0;
   display: grid;
   place-items: center;
   border: 2px solid var(--bg-gray);
   border-radius: 50%;
   visibility: visible;
   opacity: 0;
   transform: translateY(50px);
   transition: opacity $time * 2, transform $time * 2;
   &.active {
      opacity: 1;
      transform: translateY(0px);
   }
   &::before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      mask-image: url("/images/icons/arrow-prev.svg");
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: 20px 20px;
      background-color: var(--text-gray);
      transform: rotate(90deg);
   }
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
      }
   }
}
</style>
