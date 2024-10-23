<template lang="pug">
	.main-hero(ref="mainHero")
		SectionMainHeroWidget
		.container
			.main-hero__image
				img(:src="`/images/main-hero/bg.jpg`" alt="фоновое изображение")
			.main-hero__body
				.main-hero__title.hero-title(:class="{active: isShowTitle}")
					| Апарт-комплекс 
					.hero-title__image
						img(:src="`/images/main-hero/title.svg`" alt="заголовок")
				SectionMainHeroCards
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const isShowTitle = ref(false);

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
   console.log("start");
});
nuxtApp.hook("page:finish", () => {
   showTitle();
});

const showTitle = () => {
   isShowTitle.value = !isShowTitle.value;
};

const mainHero = ref("");

const animationHero = () => {
   const tl = gsap.timeline({
      scrollTrigger: {
         trigger: mainHero.value,
         start: "top 0%",
         end: "40%",
         scrub: 1,
         pin: false,
      },
   });
   tl.to(mainHero.value, {
      "--opacity": 1,
   });
   tl.fromTo(
      ".main-hero__cards",
      {
         opacity: 0,
         yPercent: 20,
      },
      {
         opacity: 1,
         yPercent: 0,
      },
      ">-0.5"
   );
   const cards = document.querySelectorAll(".main-hero__card-wrap");
   cards.forEach((card, index) => {
      gsap.fromTo(
         card,
         {
            yPercent: index == 1 ? 10 : 50, // начальная позиция (низ)
            opacity: 1, // начальная прозрачность
         },
         {
            scrollTrigger: {
               trigger: card,
               start: "top 90%", // начинает анимацию, когда верх карточки достигает 90% видимости
               end: () => "top 30%", // заканчивает анимацию, когда верх карточки достигает 30% видимости
               scrub: 1,
            },
            yPercent: -50 - index * 20, // конечная позиция (выше на 30px + дополнительный сдвиг в зависимости от индекса)
            opacity: 1, // конечная прозрачность
            duration: 1, // длительность анимации
         }
      );
   });
};
onMounted(() => {
   animationHero();
});
</script>

<style lang="scss" scoped>
:root {
   --index: calc(1vw + 1vh);
   --transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 0.9);
}
.main-hero-wrapper {
   height: 100vh;
   position: sticky;
   width: 100%;
   top: 0;
   left: 0;
   will-change: transform;
}
.main-hero {
   --opacity: 0;
   height: 100vh;
   position: absolute;
   left: 0;
   overflow: clip;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 1;
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(43, 47, 59, 0.3);
      opacity: var(--opacity);
      z-index: 2;
   }
   & .container {
      height: 100%;
   }
   &__body {
      position: relative;
      height: 100%;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   &__title {
      font-weight: 700;
      font-size: 140px;
      line-height: 160px;
      line-height: 114%;
      text-transform: uppercase;
      text-align: center;
      color: var(--text-white);
      opacity: 0;
      transition: opacity $time * 2 ease-in-out 0.5s;
      transform: translate3d(0, calc(var(--scrollTopDecrement) * 0.3), 0);
      will-change: transform;
      &.active {
         opacity: 1;
      }
   }
   &__image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      will-change: transform;
      background-color: var(--text-white);
      & img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         // object-position: 0 calc(var(--scrollTopDecrement) * 0.7);
      }
   }
   & .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      isolation: isolate;
      color: var(--text-white);
      z-index: 10;
      &::before {
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
   }
}
</style>
