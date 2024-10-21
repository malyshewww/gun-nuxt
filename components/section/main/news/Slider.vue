<template lang="pug">
	.main-news__slider.news-slider
		.news-slider__body(ref="sliderNews")
			.news-slider__wrapper.swiper-wrapper
				SectionMainNewsItem(v-for="(item, index) in newsList" :key="index" :item="item" @openPopupNews="openPopupNews(item)")
		.slider-controls
			button(ref="buttonPrev" type="button").slider-button.slider-button-prev
			button(ref="buttonNext" type="button").slider-button.slider-button-next
		PopupNews(:is-open="storePopupNews.isOpenPopupNews" @close-popup="closePopupNews" @buttonClick="closePopupNews" :popup-data="popupNewsData")
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { usePopupNewsStore } from "~/stores/popup/news";

const storePopupNews = usePopupNewsStore();

const popupNewsData = reactive({
   title: "",
   date: "",
   text: "",
});

const closePopupNews = () => {
   storePopupNews.closePopupNews();
};

const openPopupNews = (item) => {
   storePopupNews.openPopupNews();
   popupNewsData.title = item.title;
   popupNewsData.date = item.date;
   popupNewsData.text = item.text;
   console.log("open news");
};

const sliderNews = ref("");
const swiperNews = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   if (sliderNews.value) {
      swiperNews.value = new Swiper(sliderNews.value, {
         modules: [Navigation],
         observer: true,
         observeParents: true,
         slideClass: "news-item",
         slidesPerView: 3,
         spaceBetween: 40,
         speed: 800,
         loop: false,
         watchOverflow: true,
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
      });
   }
};

const newsList = [
   {
      title: "Новости по этапам строительства, июль 2024",
      text: "ГК Каскад представляет новый проект — апарт комплекс «Пушка» в Нижегородском районе города Нижний Новгород. Архитектурно апартаменты «Пушка» будут представлены 12-ти этажным жилым домом с дополнительным парапетом первого этажа.",
      date: "12 июля 2024",
   },
   {
      title: "Скидка при покупке студии с парковочным местом",
      text: "ГК Каскад представляет новый проект — апарт комплекс «Пушка» в Нижегородском районе города Нижний Новгород. Архитектурно апартаменты «Пушка» будут представлены 12-ти этажным жилым домом с дополнительным парапетом первого этажа.",
      date: "13 июля 2024",
   },
   {
      title: "График работы отдела продаж в праздники",
      date: "14 июля 2024",
   },
   {
      title: "Новости по этапам строительства, июль 2024",
      text: "ГК Каскад представляет новый проект — апарт комплекс «Пушка» в Нижегородском районе города Нижний Новгород. Архитектурно апартаменты «Пушка» будут представлены 12-ти этажным жилым домом с дополнительным парапетом первого этажа.",
      date: "12 июля 2024",
   },
];

onMounted(() => {
   initSlider();
});
</script>

<style lang="scss" scoped>
.news-slider {
   display: grid;
   grid-template-columns: 100%;
   gap: 50px;
}
</style>
