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
						.main-about__image-wrap(ref="aboutImage")
							.main-about__image.ibg
								img(:src="`/images/main-about/about-img.jpg`" alt="alt")

</template>

<script setup>
const aboutImage = ref("");

const aboutWrapper = ref("");

const { $gsap: gsap } = useNuxtApp();

onMounted(() => {
   gsap.fromTo(
      aboutImage.value,
      { scale: 0.5, opacity: 0, width: 0, visibility: "hidden" },
      {
         scale: 1,
         width: "100%",
         visibility: "inherit",
         opacity: 1,
         scrollTrigger: {
            trigger: aboutWrapper.value,
            start: "top 20%", // when the top of the image hits 80% of the viewport height
            end: "bottom 10%", // when the top of the image hits 30% of the viewport height
            scrub: true, // enables smooth scrolling
         },
      }
   );
});
</script>

<style lang="scss" scoped>
.main-about {
   padding: 120px 0 110px;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 160px;
   }
   &__body {
      display: grid;
      align-items: start;
      justify-items: center;
      text-align: center;
      gap: 40px;
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
   }
   &__image {
      padding-bottom: math.div(860, 1680) * 100%;
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
   &__text {
   }
   &__text--left {
      display: inline-flex;
      align-items: flex-start;
      gap: 30px;
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
      }
   }
   &__text--right {
      display: inline-flex;
      align-items: center;
      gap: 30px;
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
      }
      &::before {
         width: 180px;
         background-image: url("/images/main-about/text-image.png");
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
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
      }
   }
}
</style>
