<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-consultation popup-tpl" :is-open="isOpen" @close-popup="closePopup")
			PopupTpl(:popup-data="popupData" :form-errors="formErrors" @remove-error-name="removeErrorName" @remove-error-phone="removeErrorPhone")
</template>

<script setup>
const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
   popupData: {
      type: Object,
      required: true,
      default: () => {},
   },
});

const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};

const formErrors = reactive({
   name: false,
   phone: true,
});

const removeErrorName = () => {
   formErrors.name = false;
};

const removeErrorPhone = () => {
   formErrors.phone = false;
};
</script>

<style lang="scss">
.popup-consultation {
   & .popup {
      &__content {
         padding: 0;
         max-width: 910px;
         @media screen and (max-width: $xl) {
            max-width: 100%;
         }
      }
   }
}
</style>
