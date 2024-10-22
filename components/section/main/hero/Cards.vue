<template lang="pug">
	.main-hero__cards
		.main-hero__card-wrap(v-for="(card, index) in data.cards" :key="index")
			.main-hero__card.hero-card
				.hero-card__title {{card.title}}
</template>

<script setup>
const data = reactive({
   cards: [
      {
         title: "нижегородский район",
      },
      {
         title: "рядом парк Пушкина",
      },
      {
         title: "3 минуты до улицы Белинского",
      },
   ],
});
</script>

<style lang="scss" scoped>
.main-hero {
   &__cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 210px;
      width: 100%;
      position: absolute;
      max-width: 1520px;
      bottom: -64px;
      height: 610px;
      opacity: 0;
      // &.active {
      //    & .hero-card {
      //       opacity: 1;
      //       transform: translate3d(0, 0, 0);
      //    }
      // }
   }
   &__card-wrap {
      @for $i from 1 through 3 {
         &:nth-child(#{$i}) .hero-card {
            &::after {
               background-image: url("/images/icons/hero-icon-#{$i}.svg");
            }
         }
      }
      &:nth-child(1) {
         align-self: start;
         & .hero-card {
            transition-delay: 1s;
            background-color: var(--text-midnight-70);
         }
      }
      &:nth-child(2) {
         flex-grow: 1;
         align-self: end;
         & .hero-card {
            transition-delay: 1.5s;
            background-color: var(--text-avocado);
         }
      }
      &:nth-child(3) {
         position: relative;
         top: 5px;
         & .hero-card {
            transition-delay: 2s;
            &__title {
               max-width: 155px;
            }
            background-color: var(--bg-sand);
         }
      }
   }
}
.hero-card {
   min-height: 300px;
   width: 270px;
   flex-shrink: 0;
   padding: 36px 28px;
   font-weight: 700;
   font-size: 20px;
   line-height: 26px;
   text-transform: uppercase;
   color: var(--text-white);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: start;
   //  opacity: 0;
   //  transform: translate3d(0, 30px, 0);
   //  transition: opacity 0.6s ease 0s, transform 0.6s ease 0s;
   &::after {
      content: "";
      display: block;
      width: 52px;
      height: 52px;
      display: grid;
      place-items: center;
      background-repeat: no-repeat;
      background-position: center;
   }
}
</style>
