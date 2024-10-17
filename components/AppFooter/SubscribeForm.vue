<template lang="pug">
   .main-footer__form
      form(action="#").subscribe-form
         .subscribe-form__body
            .subscribe-form__title Оставьте свои контактные данные — и наш менеджер свяжется с вами
            .subscribe-form__items 
               FormField(type="text" name="name" placeholder="Имя")
               FormField(type="tel" name="phone" placeholder="Телефон")
            .subscribe-form__bottom
               UiButton(text="отправить" class-names="btn-green")
               .subscribe-form__text Отправляя заявку, вы подтверждаете, что ознакомлены и согласны с условиями политики обработки персональных данных
</template>

<style lang="scss" scoped>
.subscribe-form {
  &__body {
    display: grid;
    gap: 24px;
  }
  &__title {
    line-height: 19px;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  &__bottom {
    margin-top: 22px;
    display: flex;
    align-items: center;
    gap: 40px;
    & .btn {
      width: auto;
    }
  }
  &__text {
    font-size: 14px;
    line-height: 18px;
    color: var(--text-gray);
  }
}
</style>
