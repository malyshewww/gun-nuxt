<template lang="pug">
	.header__logo-wrap
		nuxt-link(v-if="!isWhiteLogo" to="/").header__logo
			picture
				source(:srcset="`/images/logo-black.svg`" media="(min-width: 768px)")
				source(:srcset="`/images/logo-black-mobile.svg`" media="(min-width: 300px)")
				img(src="/images/logo-black.svg")
		nuxt-link(v-else to="/").header__logo
			picture
				source(:srcset="`/images/logo-white.svg`" media="(min-width: 768px)")
				source(:srcset="`/images/logo-white-mobile.svg`" media="(min-width: 300px)")
				img(src="/images/logo-white.svg")
</template>

<script setup>
const router = useRoute();
const isWhiteLogo = inject("isWhiteLogo");
console.log(isWhiteLogo);
</script>

<style lang="scss" scoped>
.header__logo {
   &-wrap {
      width: 182px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
   }
}
</style>
