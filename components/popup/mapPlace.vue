<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-map-place" :is-open="isOpen" @close-popup="closePopup")
			SectionMainLocationSlider
</template>

<script setup>
const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
});
const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
</script>

<style lang="scss">
.popup-map-place {
   & .slider-location {
      display: block;
   }
}
</style>
