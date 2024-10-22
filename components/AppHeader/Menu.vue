<template lang="pug">
	.header__menu.menu
		nav.menu__body
			ul.menu__list 
				li.menu__item(v-for="(item, index) in menu" :key="index")
					nuxt-link(:to="item.path").menu__link {{item.title}}
</template>
<script setup>
const menu = inject("menu");
</script>

<style lang="scss">
.menu {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 20px;
   }
   &__item {
   }
   &__link {
      font-weight: 600;
      transition: color $time ease 0s;
      font-family: var(--font-family);
      font-weight: 600;
      line-height: 22px;
      font-size: 16px;
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-avocado);
         }
      }
   }
}
</style>
