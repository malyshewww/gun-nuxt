<template lang="pug">
	.contacts-footer__social.social
		ul.social__list
			li.social__item
				a(href="#" target="_blank").social__link
					svg(width="28", height="28", viewBox="0 0 28 28", fill="none", xmlns="http://www.w3.org/2000/svg")
						path(d="M14.8938 19.8334C8.45705 19.8334 4.80954 15.494 4.6665 8.16675H7.88489C7.95641 13.5021 10.3881 15.7785 12.2476 16.2054V8.16675H15.2514V12.7907C17.1109 12.5773 19.042 10.5143 19.6857 8.16675H22.6895C22.1889 11.0123 20.0433 13.1464 18.5413 14.0001C20.0433 14.7115 22.4749 16.5611 23.3332 19.8334H19.9717C19.2565 17.6281 17.4685 15.9208 15.1084 15.6363V19.8334H14.8938Z", fill="#878C9A")
</template>

<style lang="scss" scoped>
.contacts-footer {
   &__social {
      margin-top: auto;
      @media screen and (max-width: $xxxl) {
         margin-top: 20px;
      }
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
}
.social {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
   }
   &__item {
      flex-shrink: 0;
   }
   &__link {
      border: 1px solid var(--border-white);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      @media screen and (max-width: $xl) {
         width: 48px;
         height: 48px;
         & svg {
            width: 28px;
            height: 28px;
         }
      }
   }
}
</style>
