<template lang="pug">
	.main__heading.heading-main
		h1.heading-main__title 
			| Выбрать
			span.text-transparent-current апартаменты
		ChoiceButtons
</template>

<script setup></script>

<style lang="scss" scoped>
.heading-main {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   gap: 20px;
   .page--flats-scheme & {
      margin-bottom: 66px;
      @media screen and (max-width: $xl) {
         margin-bottom: 40px;
      }
   }
}
</style>
