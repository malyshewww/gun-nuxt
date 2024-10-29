<template lang="pug">
	.wrapper.scroller(ref="scroller")
		UiTrailer
		AppHeader(:is-white="true")
		main.main
			.page
				slot
			ButtonUp
		AppFooter
</template>

<script setup>
const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const scroller = ref("");
onMounted(() => {
   const mainContent = document.querySelector(".main-content");
   const buttonUp = document.querySelector(".button-up");
   ScrollTrigger.defaults({ scroller: scroller.value });
   window.addEventListener("scroll", (e) => {
      ScrollTrigger.update();
      const scrollY = window.scrollY;
      //   mainHeroWrapper.style.backgroundPositionY = scrollY * 0.7 + "px";
      document.documentElement.style.setProperty(
         "--scrollTopDecrement",
         `${-scrollY}px`
      );
      const header = document.querySelector(".header");
      const mainContentHeight =
         mainContent.getBoundingClientRect().top + window.scrollY;
      if (scrollY > mainContentHeight) {
         header.classList.replace("header-white", "header-black");
         buttonUp.classList.add("active");
      } else {
         header.classList.replace("header-black", "header-white");
         buttonUp.classList.remove("active");
      }
   });
   //    if (mainContent) {
   //       const options = {
   //          rootMargin: "0px 0px 0px 0px",
   //          threshold: 0,
   //       };
   //       const observer = new IntersectionObserver(([entry]) => {
   //          const targetInfo = entry.boundingClientRect;
   //          const rootBoundsInfo = entry.rootBounds;
   //          if (targetInfo.top <= rootBoundsInfo.top) {
   //             console.log("suc");
   //          } else {
   //             console.log("err");
   //          }
   //       }, options);
   //       observer.observe(mainContent);
   //    }
});
</script>

<style lang="scss" scoped>
.page {
   padding: 0px 0px 201px;
}
</style>
