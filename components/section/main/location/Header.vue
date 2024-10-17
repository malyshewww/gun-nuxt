<template lang="pug">
	.main-location__header.header-location
		SectionHeading(title="Локация")
		h2.main-location__title.custom-title
			| Всё #[span.text-transparent-current нужное] рядом
		.header-location__description Развитая в районе застройки транспортная система позволит комфортно и оперативно добраться в любую точку города
</template>

<style lang="scss" scoped>
.header-location {
  display: grid;
  justify-items: start;
  gap: 32px;
  max-width: 1000px;
  &__description {
    margin-top: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    font-family: var(--font-family);
  }
}
</style>
