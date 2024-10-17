<template lang="pug">
	.main-hero
		SectionMainHeroWidget
		.container
			AppHeader
			.main-hero__image
				img(:src="`/images/main-hero/bg.jpg`" alt="фоновое изображение")
			.main-hero__body
				.main-hero__title.hero-title
					| Апарт-комплекс 
					.hero-title__image
						img(:src="`/images/main-hero/title.svg`" alt="заголовок")
				SectionMainHeroCards
</template>

<script setup></script>

<style lang="scss" scoped>
.main-hero {
  min-height: 100vh;
  overflow: hidden;
  &__body {
    position: relative;
    height: 100vh;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-weight: 700;
    font-size: 140px;
    line-height: 160px;
    line-height: 114%;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-white);
  }
  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    & img {
      @extend .main-hero__image;
    }
  }
  & .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    isolation: isolate;
    color: var(--text-white);
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% + 20px);
      background: linear-gradient(180deg, #2b2f3b 0%, rgba(43, 47, 59, 0) 100%);
      opacity: 0.5;
      z-index: -1;
    }
  }
}
</style>
