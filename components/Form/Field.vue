<template lang="pug">
	.form-item(:class="{error: isError}")
		.form-item__field(:class="[{focus: isFocusField}, {disabled: isDisabledField}]")
			input(:type="type" :name="name" :placeholder="placeholder" v-model="text" @focus="onFocusField" @blur="onBlurField")
			button(v-if="isError" type="button" @click="clearField").form-item__close
		.error-message(v-if="isError") Сообщение об ошибке
</template>

<script setup>
const props = defineProps({
   type: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   placeholder: {
      type: String,
      required: true,
   },
   isError: {
      type: Boolean,
      required: false,
      default: () => false,
   },
});

const isFocusField = ref(false);

const isDisabledField = ref(false);

const onFocusField = () => {
   isFocusField.value = true;
};
const onBlurField = () => {
   isFocusField.value = false;
};

const emit = defineEmits(["removeErrorName", "removeErrorPhone"]);

const text = ref(null);

const clearField = () => {
   text.value = "";
   emit("removeErrorName");
   emit("removeErrorPhone");
   // currentFiledError.value = false;
};
</script>

<style lang="scss" scoped>
.form-item {
   display: flex;
   flex-direction: column;
   gap: 4px;
   &__field {
      position: relative;
      &::before {
         content: "";
         border-bottom: 1px solid var(--border-white);
         position: absolute;
         bottom: 0;
         left: 0;
         width: 100%;
         transition: border-color $time;
      }
      &.focus::before {
         border-color: var(--text-white);
      }
      &.disabled {
         pointer-events: none;
         &::before {
            border-color: var(--border-white);
         }
         & input {
            color: #8d8d8d;
         }
      }
   }
   &.error {
      & .form-item__field {
         &::before {
            border-color: var(--system-alert);
         }
      }
   }
   & input {
      width: 100%;
      background-color: transparent;
      font-size: 16px;
      line-height: 19px;
      font-family: var(--font-family);
      color: var(--text-white);
      padding: 13px 4px;
      padding-right: 24px;
      min-height: 48px;
      &::placeholder {
         font-size: 16px;
         line-height: 19px;
         color: var(--text-white);
      }
   }
   &__close {
      position: absolute;
      top: 0;
      right: 0px;
      height: 100%;
      width: 24px;
      display: grid;
      place-items: center;
      &::before {
         content: "";
         mask-image: url("/images/icons/close-red.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--system-alert);
         width: 16px;
         height: 16px;
      }
   }
}
.error-message {
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   color: var(--system-alert);
}
</style>
