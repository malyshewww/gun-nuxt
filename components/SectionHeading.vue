<template lang="pug">
	 .section-heading 
		  span {{title}}
</template>

<script setup>
defineProps({
   title: {
      type: String,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.section-heading {
   border: 2px solid var(--bg-gray);
   border-radius: 100px;
   padding: 10px 23px;
   min-height: 44px;
   display: grid;
   place-items: center;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   letter-spacing: 0.02em;
   text-transform: uppercase;
   color: var(--text-gray);
   font-family: var(--font-family);
   width: fit-content;
}
</style>
