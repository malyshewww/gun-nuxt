<template lang="pug">
	section.main-about
		.container
			.main-about__wrapper(ref="aboutWrapper")
				.main-about__body
					SectionHeading(title="О проекте")
					h2.main-about__title.title-about
						span.title-about__text.title-about__text--left апартаменты нового
						span.title-about__text уровня для тех, кто хочет
						span.title-about__text--right 
								| жить в центре
								span.title-about__labels(data-title="ул. Тимирязева")
						span.title-about__text по приемлемой стоимости
					.main-about__description Апартаменты «Пушка» будут представлены 12-ти этажным жилым домом с&nbsp;дополнительным парапетом первого этажа. Необычное архитектурное&nbsp;решение здания подчёркивает общий концепт проекта — динамичность, мобильность, современность
				.main-about__image-container
					.main-about__image-wrap
						.main-about__image.ibg(ref="aboutImage")
							img(:src="`/images/main-about/about-img.jpg`" alt="alt")
</template>

<script setup>
const aboutImage = ref("");

const aboutWrapper = ref("");

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const animation = () => {
   gsap.fromTo(
      aboutImage.value,
      { scale: 0.2, opacity: 0, visibility: "hidden" },
      {
         scale: 1,
         visibility: "inherit",
         width: "100%",
         opacity: 1,
         scrollTrigger: {
            trigger: aboutWrapper.value,
            start: "top 10%", // when the top of the image hits 80% of the viewport height
            end: "bottom 30%", // when the top of the image hits 30% of the viewport height
            scrub: true, // enables smooth scrolling
         },
      }
   );
};

onMounted(() => {
   animation();
});
</script>

<style lang="scss" scoped>
.main-about {
   padding: 120px 0 110px;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 160px;
      @media screen and (max-width: $xxxl) {
         gap: 140px;
      }
   }
   &__body {
      display: grid;
      align-items: start;
      justify-items: center;
      text-align: center;
      gap: 40px;
      @media screen and (max-width: $xxxl) {
         gap: 32px;
      }
   }
   &__description {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      line-height: 160%;
      text-align: center;
      color: var(--text-midnight-100);
      font-family: var(--font-family);
      max-width: 850px;
      justify-self: center;
   }
   &__image-container {
      width: 100%;
      display: grid;
      place-items: center;
   }
   &__image-wrap {
      // height: 860px;
      padding-bottom: 51.66%;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      transform-origin: 0 0;
      @media screen and (max-width: $xxxl) {
         padding-bottom: 49.66%;
      }
   }
   &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      & img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }
}

.title-about {
   display: flex;
   flex-direction: column;
   align-items: center;
   font-weight: 700;
   font-size: 92px;
   line-height: 108px;
   text-transform: uppercase;
   margin: 0 0 20px;
   @media screen and (max-width: $xxxl) {
      font-size: 36px;
      line-height: 47px;
      margin: 0;
   }
   &__text {
   }
   &__text--left {
      display: inline-flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0px 30px;
      &::before {
         content: "";
         display: block;
         width: 320px;
         border-radius: 500px;
         padding: 20px;
         display: grid;
         place-items: center;
         height: 92px;
         background-color: var(--text-avocado);
         background-image: url("/images/main-about/text-logo.svg");
         background-repeat: no-repeat;
         background-position: center;
         @media screen and (max-width: $xxxl) {
            width: 176px;
            height: 48px;
            padding: 10px 36px;
            background-size: 105px 21px;
         }
      }
      @media screen and (max-width: $xxxl) {
         gap: 0 14px;
      }
   }
   &__text--right {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0 30px;
      @media screen and (max-width: $xxxl) {
         gap: 0 14px;
      }
   }
   &__labels {
      display: flex;
      align-items: center;
      gap: 4px;
      &::before,
      &::after {
         content: "";
         display: block;
         height: 92px;
         border-radius: 500px;
         @media screen and (max-width: $xxxl) {
            height: 48px;
         }
      }
      &::before {
         width: 180px;
         background-image: url("/images/main-about/text-image.png");
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
         @media screen and (max-width: $xxxl) {
            width: 106px;
         }
      }
      &::after {
         content: attr(data-title);
         font-weight: 700;
         font-size: 22px;
         line-height: 27px;
         line-height: 125%;
         text-transform: uppercase;
         text-align: center;
         color: var(--text-white);
         display: grid;
         place-items: center;
         padding: 10px;
         width: 315px;
         background: var(--text-midnight-70);
         @media screen and (max-width: $xxxl) {
            width: 245px;
            font-size: 18px;
            line-height: 20px;
            padding: 10px;
         }
      }
   }
}
</style>
