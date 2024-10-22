<template lang="pug">
   .scenariors__card.card-scenariors(:class="`card-scenariors--${index+1}`")
      .card-scenariors__caption {{card.title}}
      .card-scenariors__text(v-html="card.text")
</template>

<script setup>
defineProps({
   card: {
      type: Object,
      required: true,
   },
   index: {
      type: Number,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.card-scenariors {
   min-height: 480px;
   width: 430px;
   flex-shrink: 0;
   padding: 40px 52px 48px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   color: var(--text-white);
   &:nth-child(1) {
      background-color: var(--text-avocado);
      transform: translate(125px, 115px) rotate(-10deg);
   }
   &:nth-child(2) {
      background-color: var(--text-midnight-70);
      z-index: 2;
   }
   &:nth-child(3) {
      background-color: var(--bg-sand);
      transform: translate(-125px, 115px) rotate(10deg);
      z-index: 3;
   }
   &__caption {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      display: inline-flex;
      flex-direction: column;
      align-items: start;
      gap: 12px;
      &::before {
         content: "0" counter(num);
         counter-increment: num;
         display: block;
         font-family: var(--font-family);
         font-weight: 500;
         font-size: 20px;
         line-height: 32px;
      }
   }
   &__text {
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-transform: uppercase;
   }
}
</style>
