<template lang="pug">
	.form-item
		.form-item__field
			input(:type="type" :name="name" :placeholder="placeholder")
</template>

<script setup>
defineProps({
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
});
</script>

<style lang="scss" scoped>
.form-item {
   &__field {
      position: relative;
      &::before {
         content: "";
         border-bottom: 1px solid var(--border-white);
         position: absolute;
         bottom: 0;
         left: 0;
         width: 100%;
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
      min-height: 48px;
      &::placeholder {
         font-size: 16px;
         line-height: 19px;
         color: var(--text-white);
      }
   }
}
</style>
