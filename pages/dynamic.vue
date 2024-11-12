<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.dynamic
			.container
				.main__heading.heading-main
					h1.heading-main__title
						| Динамика
						span.text-transparent 
							span.text-transparent-current строительства
							span.text-transparent__label 
								span Сдаём проект в 2027
				.dynamic__wrapper
					.dynamic__body
						ProgressCard(v-for="(item, index) in dynamic.data" :key="index" @click="openPopupDynamic($event, item)" :card="item")
					.dynamic__bottom
						UiButton(text="Показать ещё" class-names="btn-transparent")
	PopupDynamic(:is-open.sync="storePopupDynamic.isOpenPopupDynamic" @close-popup="closePopupDynamic" :popup-data="initialState" :initial-slide="initialSlide")
</template>

<script setup>
import { usePopupDynamicStore } from "~/stores/popup/dynamic";

const initialSlide = ref(0);

const storePopupDynamic = usePopupDynamicStore();

const initialState = reactive({
   caption: "",
   images: [],
});

const openPopupDynamic = ($event, item) => {
   initialState.caption = item.caption;
   initialState.images = item.images;
   storePopupDynamic.openPopupDynamic();
};
const closePopupDynamic = () => {
   storePopupDynamic.closePopupDynamic();
   setTimeout(() => {
      initialState.caption = null;
      initialState.images = null;
   }, 100);
};

// const nuxtApp = useNuxtApp();
// nuxtApp.hook("page:start", () => {
//    console.log("start");
// });
// nuxtApp.hook("page:finish", () => {
//    console.log("finish");
// });

const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Динамика строительства",
      path: "/",
   },
];
const dynamic = reactive({
   data: [
      {
         img: "1",
         caption: "Август 2024",
         images: ["1", "2", "3"],
      },
      {
         img: "2",
         caption: "Сентябрь 2024",
         images: ["2", "3", "1"],
      },
      {
         img: "3",
         caption: "Октябрь 2024",
         images: ["3", "1", "3"],
      },
      {
         img: "4",
         caption: "Ноябрь 2024",
         images: ["1", "2", "3", "4"],
      },
      {
         img: "1",
         caption: "Август 2024",
         images: ["1", "2", "3"],
      },
      {
         img: "2",
         caption: "Сентябрь 2024",
         images: ["2", "3", "1"],
      },
      {
         img: "3",
         caption: "Октябрь 2024",
         images: ["3", "1", "3"],
      },
      {
         img: "4",
         caption: "Ноябрь 2024",
         images: ["1", "2", "3", "4"],
      },
      {
         img: "1",
         caption: "Август 2024",
         images: ["1", "2", "3"],
      },
      {
         img: "2",
         caption: "Сентябрь 2024",
         images: ["2", "3", "1"],
      },
      {
         img: "3",
         caption: "Октябрь 2024",
         images: ["3", "1", "3"],
      },
      {
         img: "4",
         caption: "Ноябрь 2024",
         images: ["1", "2", "3", "4"],
      },
   ],
});
</script>

<style lang="scss" scoped>
.dynamic {
   &__wrapper {
      display: grid;
      gap: 64px;
      @media screen and (max-width: $xl) {
         gap: 32px;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      align-items: start;
      @media screen and (max-width: $xxxl) {
         grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: $xl) {
         gap: 20px;
         grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: $md) {
         grid-template-columns: 100%;
         gap: 14px;
      }
   }
   &__bottom {
      justify-self: center;
      @media screen and (max-width: $xl) {
         justify-self: stretch;
      }
      & .btn {
         max-width: 188px;
         padding: 11px 30px;
         @media screen and (max-width: $xl) {
            max-width: 100%;
         }
      }
   }
}
</style>
