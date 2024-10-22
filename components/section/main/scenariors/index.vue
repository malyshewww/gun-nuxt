<template lang="pug">
	section.main-scenariors
		.container
			.main-scenariors__wrapper
				.section-top
					SectionHeading(title="Сценарии жизни")
					.section-top__content
						h2.section-top__title.custom-title
							| Правильные инвестиции
						.section-top__description 
							| Благодаря продуманному концепту проекта, в&nbsp;Пушке будет реализовано несколько сценариев жизни
				SectionMainScenariorsCards
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const timeline = ref(null);

const animationScenariors = () => {
   const cards = document.querySelectorAll(".card-scenariors");

   // const animation = gsap.timeline({
   //    scrollTrigger: {
   //       trigger: ".main-scenariors__cards",
   //       pinSpacing: true,
   //       pin: true,
   //       scrub: true,
   //       start: `top top`,
   //       end: "+=100%",
   //    },
   //    yPercent: 100,
   // });
   // if (cards.length > 0) {
   //    timeline.value = gsap
   //       .timeline({
   //          scrollTrigger: {
   //             trigger: ".main-scenariors__cards-container",
   //             pin: true,
   //             pinSpacing: true,
   //             stagger: 0.5,
   //             start: () => "top -1px",
   //             end: () => "+=" + cards[0].clientHeight * cards.length,
   //             scrub: 1,
   //             duration: 1,
   //          },
   //       })
   //       .from(".card-scenariors--1", {
   //          y: "130vh",
   //       })
   //       // .addLabel("card1")
   //       .to(".card-scenariors--1", {
   //          yPercent: 0,
   //       })
   //       .from(".card-scenariors--2", {
   //          y: "130vh",
   //          // opacity: 1,
   //       })
   //       // .addLabel("card2")
   //       .to(
   //          ".card-scenariors--1",
   //          {
   //             yPercent: 0,
   //          },
   //          "-=0.3"
   //       )
   //       .to(".card-scenariors--2", {
   //          yPercent: 0,
   //       })
   //       .from(".card-scenariors--3", {
   //          y: "130vh",
   //       })
   //       // .addLabel("card3")
   //       .to(
   //          ".card-scenariors--2",
   //          {
   //             yPercent: 0,
   //          },
   //          "-=0.3"
   //       )
   //       .to(".card-scenariors--3", {
   //          yPercent: 0,
   //       });
   // }
   // cards.forEach((card, index) => {
   //    gsap.to(card, {
   //       opacity: 1,
   //       y: -50,
   //       duration: 0.5,
   //       scrollTrigger: {
   //          trigger: ".main-scenariors__cards-container",
   //          start: "top 80%", // Начало анимации
   //          end: "top 50%", // Конец анимации
   //          scrub: true,
   //          markers: false, // Для отладки можно установить `true`
   //          toggleActions: "play none none reverse",
   //          delay: index * 0.3, // Задержка для последовательного появления
   //       },
   //    });
   // });
};

onMounted(() => {
   animationScenariors();
});
</script>

<style lang="scss" scoped>
.main-scenariors {
   padding: 110px 0;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 80px;
   }
}
.section-top {
   justify-items: center;
   text-align: center;
   &__content {
      text-align: center;
      justify-items: center;
   }
   &__title {
      font-size: 92px;
      line-height: 108px;
   }
}
</style>
