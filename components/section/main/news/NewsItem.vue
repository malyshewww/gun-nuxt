<template lang="pug">
	.news-item(@click="openPopupNews(item)")
		.news-item__body
			.news-item__title {{item.title}}
			.news-item__content
				.news-item__text 
					p {{item.text}}
			.news-item__bottom
				.news-item__date {{item.date}}
				button(type="button").news-item__read-more читать
</template>

<script setup>
defineProps({
   item: {
      type: Object,
      required: true,
   },
});

const emit = defineEmits(["openPopupNews"]);

const openPopupNews = () => {
   emit("openPopupNews");
};
</script>

<style lang="scss" scoped>
.news-item {
   min-height: 322px;
   border: 1px solid var(--bg-gray);
   padding: 32px 36px;
   transition: border-color $time;
   flex-shrink: 0;
   @media (any-hover: hover) {
      &:hover {
         border-color: var(--text-avocado);
         cursor: pointer;
         & .news-item__read-more {
            opacity: 1;
            transform: translate3d(0, 0, 0);
         }
      }
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 100%;
   }
   &__title {
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-transform: uppercase;
   }
   &__text {
      font-size: 16px;
      line-height: 19px;
      font-family: var(--font-family);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      & p {
         display: inline;
      }
   }
   &__date {
      line-height: 19px;
      font-family: var(--font-family);
   }
   &__read-more {
      font-weight: 700;
      line-height: 20px;
      color: var(--text-avocado);
      opacity: 0;
      transform: translate3d(10px, 0, 0);
      transition: opacity $time, transform $time;
   }
   &__bottom {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
   }
}
</style>
