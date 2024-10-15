<template lang="pug">
	.footer__menu.menu-footer
		nav.menu-footer__body
			ul.menu-footer__list
				li(v-for="(item, index) in menu").menu-footer__item
					nuxt-link(:to="`${item.path}`").menu-footer__link {{item.title}}
</template>

<script setup>
const menu = inject("menu");
</script>

<style lang="scss" scoped>
.menu-footer {
   padding: 32px 0;
   border-top: 1px solid var(--border-white);
   border-bottom: 1px solid var(--border-white);
   &__body {
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 28px;
   }
   &__item {
   }
   &__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
   }
}
</style>
