<template lang="pug">
	NuxtLayout(:name="default")
		.main
			BreadCrumbs(:list="crumbs")
			.not-found(v-if="error.statusCode == 404")
				.container
					.not-found__body
						.not-found__image
							img(:src="`/images/not-found/404.svg`" alt="404")
						.not-found__text Кажется, такой страницы не существует...
						UiButton(text="на главную" class-names="btn-green" @button-click="goToIndexPage")
</template>

<script setup>
import { useMainInfoStore } from "./stores/maininfo";

const store = useMainInfoStore();

provide("menu", store.menu);

const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "404",
      path: "/",
   },
];
const error = useError();

const router = useRouter();

const goToIndexPage = () => {
   // navigateTo("/");
   router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
.not-found {
   padding-top: 38px;
   @media screen and (max-width: $xl) {
      padding-top: 20px;
   }
   &__body {
      display: grid;
      grid-template-columns: 100%;
      justify-items: center;
      text-align: center;
      gap: 16px;
   }
   &__text {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
   }
   & .btn {
      width: auto;
      margin-top: 8px;
      @media screen and (max-width: $md) {
         margin: 0;
         width: 100%;
      }
   }
}
</style>
