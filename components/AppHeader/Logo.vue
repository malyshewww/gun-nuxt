<template lang="pug">
	nuxt-link(v-if="router.name !== 'index'" to="/").header__logo
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
</script>
