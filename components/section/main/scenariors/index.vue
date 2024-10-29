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
   const cards = document.querySelectorAll(".scenariors__card");
   const boxCards = document.querySelector(".main-scenariors__cards");

   // // Создаем общий таймлайн для анимации карточек
   // const tl = gsap.timeline({
   //    scrollTrigger: {
   //       trigger: boxCards,
   //       start: "top top", // Начинаем, когда верх блока box касается верха окна
   //       end: "+=3000", // Задайте общую длину прокрутки для анимации
   //       pin: true, // Закрепляем блок box при прокрутке
   //       scrub: 1, // Делаем анимацию плавной
   //    },
   // });

   // // Для каждой карточки добавляем анимацию смещения
   // cards.forEach((card, index) => {
   //    tl.to(
   //       card,
   //       {
   //          yPercent: 0, // Смещение вверх на 100%
   //          duration: 1,
   //          ease: "none",
   //       },
   //       index
   //    ); // Используем индекс для создания очередности анимации
   // });
   // gsap.set(cards, { opacity: 0 }); // Устанавливаем начальную непрозрачность 0

   // ScrollTrigger.create({
   //    trigger: boxCards,
   //    start: "top 10%",
   //    end: "+=2000", // Общее расстояние прокрутки для триггера
   //    scrub: true,
   //    pin: true,
   // });
   // // const scrollTrigger = {
   // // };

   // cards.forEach((card, index) => {
   //    gsap.to(card, {
   //       scrollTrigger: {
   //          start: `top+=${index * 10} top`,
   //          end: `+=2000`,
   //       },
   //       opacity: 1,
   //       y: -50 * index, // Двигаем каждую карточку вверх
   //    });
   // });
   // gsap.from(".scenariors__card:nth-child(1)", {
   //    scrollTrigger: {
   //       trigger: ".main-scenariors__cards",
   //       scrub: true,
   //       pin: true,
   //       start: "top top",
   //       end: "+=100%",
   //    },
   //    scaleX: 0,
   //    transformOrigin: "left center",
   //    ease: "none",
   // });

   if (cards.length > 0) {
      timeline.value = gsap
         .timeline({
            scrollTrigger: {
               trigger: boxCards,
               pin: true,
               // pinSpacing: true,
               stagger: 0.5,
               start: "top-=100px",
               end: () => "+=" + cards[0].clientHeight * cards.length,
               scrub: 1,
               duration: 1,
            },
         })
         .from(".card-scenariors--1", {
            y: "130vh",
         })
         .to(".card-scenariors--1", {
            yPercent: 0,
         })
         .from(".card-scenariors--2", {
            y: "130vh",
            // opacity: 1,
         })
         .to(
            ".card-scenariors--1",
            {
               yPercent: 0,
            },
            "-=0.3"
         )
         .to(".card-scenariors--2", {
            yPercent: 0,
         })
         .from(".card-scenariors--3", {
            y: "130vh",
         })
         .to(
            ".card-scenariors--2",
            {
               yPercent: 0,
            },
            "-=0.3"
         )
         .to(".card-scenariors--3", {
            yPercent: 0,
         });
   }
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
      @media screen and (max-width: $xxxl) {
         font-size: 56px;
         line-height: 73px;
      }
   }
}
</style>
