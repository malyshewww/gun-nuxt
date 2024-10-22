<template lang="pug">
	.header__actions
		a(href="tel:88003448888").header__phone 8 800 344-88-88
</template>

<style lang="scss">
.header__actions {
   width: 182px;
   display: flex;
   justify-content: flex-end;
   flex-shrink: 0;
}
.header {
   &__phone {
      font-weight: 600;
      line-height: 22px;
      transition: color $time ease 0s;
      font-weight: 600;
      font-size: 16px;
      font-family: var(--font-family);
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-avocado);
         }
      }
   }
}
</style>
