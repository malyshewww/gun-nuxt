<template lang="pug">
	.wrapper.scroller(ref="scroller")
		UiTrailer
		AppHeader(:is-white="isWhite")
		main.main
			.page
				slot
				ButtonUp
		AppFooter
</template>

<script setup>
const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const isWhite = ref(true);

onMounted(() => {
   const mainContent = document.querySelector(".main-content");
   const buttonUp = document.querySelector(".button-up");
   buttonUp.classList.remove("active");
   const footer = document.querySelector(".footer");
   function checkScroll() {
      const mainContentHeight =
         mainContent.getBoundingClientRect().top + window.scrollY;
      if (scrollY > mainContentHeight) {
         isWhite.value = false;
         buttonUp.classList.add("active");
      } else {
         isWhite.value = true;
         buttonUp.classList.remove("active");
      }
   }
   checkScroll();
   window.addEventListener("scroll", (e) => {
      const scrollY = window.scrollY;
      // document.documentElement.style.setProperty(
      //    "--scrollTopDecrement",
      //    `${-scrollY}px`
      // );
      checkScroll();
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (footerRect.top <= windowHeight) {
         buttonUp.style.position = "absolute";
         // buttonUp.style.bottom = windowHeight - footerRect.top + "px";
         buttonUp.style.bottom = `${window.innerWidth > 767.98 ? 80 : 50}px`;
      } else {
         buttonUp.style.position = "fixed";
         buttonUp.style.bottom = `${window.innerWidth > 767.98 ? 80 : 60}px`;
         // buttonUp.style.bottom = `80px`;
      }
   });

   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            buttonUp.classList.remove("active");
            // console.log("Footer пересекает нижнюю часть экрана");
         } else {
            buttonUp.classList.remove("active");
            // console.log("Footer не пересекает нижнюю часть экрана");
            return;
         }
      });
   });
   observer.observe(footer);
});
</script>

<style lang="scss" scoped>
.page {
   padding: 0px 0px 281px;
   position: relative;
   @media screen and (max-width: $xl) {
      padding: 0 0 241px;
   }
   @media screen and (max-width: $md) {
      padding: 0 0 136px;
   }
}
</style>
