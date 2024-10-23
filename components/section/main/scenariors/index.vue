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
   gsap.registerPlugin(ScrollTrigger);

   const cards = document.querySelectorAll(".card-scenariors");
   const boxCards = document.querySelector(".main-scenariors__cards");

   const tl = gsap.timeline({ paused: true });

   // tl.fromTo(".card-scenariors--1", { rotate: 0 }, { rotate: -10 }, "");
   // tl.fromTo(".card-scenariors--3", { rotate: 0 }, { rotate: 10 }, "");

   // cards.forEach((card, index) => {
   //    tl.fromTo(
   //       card,
   //       {
   //          opacity: 0,
   //          y: 100, // начальная позиция по оси Y
   //       },
   //       {
   //          opacity: 1,
   //          y: 0, // конечная позиция по оси Y
   //          scrollTrigger: {
   //             trigger: card,
   //             start: "top bottom-=100", // когда верх карточки достигает 100px от низа окна
   //             end: "top top+=200", // когда верх карточки достигает 200px от верха окна
   //             toggleActions: "play none none reverse",
   //             markers: true, // Уберите эту строку, если не нужны маркеры
   //          },
   //       }
   //    );
   // });

   // ScrollTrigger.create({
   //    trigger: ".main-scenariors__cards",
   //    markers: true,
   //    start: "top center",
   //    end: "bottom center",
   //    animation: tl,
   //    scrub: true,
   //    pin: true,
   // });

   // if (cards.length > 0) {
   //    timeline.value = gsap
   //       .timeline({
   //          scrollTrigger: {
   //             trigger: boxCards,
   //             pin: true,
   //             pinSpacing: true,
   //             stagger: 0.5,
   //             start: "top+=0",
   //             end: () => "+=" + cards[0].clientHeight * cards.length,
   //             scrub: 1,
   //             duration: 1,
   //          },
   //       })
   //       .from(".card-scenariors--1", {
   //          y: "130vh",
   //       })
   //       .to(".card-scenariors--1", {
   //          yPercent: 0,
   //       })
   //       .from(".card-scenariors--2", {
   //          y: "130vh",
   //          // opacity: 1,
   //       })
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
};
onMounted(() => {
   animationScenariors();
});
</script>

<style lang="scss" scoped>
.main-scenariors {
   padding: 110px 0;
   // &__wrapper {
   //    display: grid;
   //    grid-template-columns: 100%;
   //    gap: 80px;
   // }
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
