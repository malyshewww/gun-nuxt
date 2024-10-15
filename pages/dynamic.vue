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
						.dynamic__item.item-dynamic(v-for="item, index in dynamic.data" :key="index" @click="openPopupDynamic($event, item)")
							.item-dynamic__image.ibg
								img(:src="`/images/dynamic/dynamic-${item.images[0]}@2x.jpg`" :alt="`Динамика строительства ${item.caption}`")
							.item-dynamic__content
								.item-dynamic__caption {{ item.caption }}
					.dynamic__bottom
						UiButton(text="Показать ещё" class-names="btn-transparent")
	PopupDynamic(:is-open="storePopupDynamic.isOpenPopupDynamic" @close-popup="closePopupDynamic" :popup-data="initialState" :initial-slide="initialSlide")
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
   ],
});
</script>

<style lang="scss">
.dynamic {
   &__wrapper {
      display: grid;
      gap: 64px;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      align-items: start;
      @media screen and (max-width: $xl) {
         grid-template-columns: repeat(3, 1fr);
      }
   }
   &__bottom {
      justify-self: center;
      & .btn {
         max-width: 188px;
         padding: 11px 30px;
      }
   }
}
.item-dynamic {
   position: relative;
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
      }
   }
   &__image {
      padding-bottom: math.div(480, 390) * 100%;
   }
   &__content {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      z-index: 2;
      padding: 32px 36px;
   }
   &__caption {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      color: var(--text-white);
      font-family: var(--second-family);
      flex: 1 1 auto;
   }
}
</style>
