<template lang="pug">
	section.main-location
		.container
			.main-location__wrapper
				SectionMainLocationHeader
				.main-location__body
					.main-location__map.map
						.map#mmapElem
					button(type="button").main-location__button развернуть карту
					SectionMainLocationSlider
</template>

<style lang="scss" scoped>
.main-location {
  padding: 120px 0;
  &__body {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 70%;
      height: 61px;
      z-index: 2;
      background-color: var(--bg-white);
    }
  }
  &__map {
    padding-bottom: math.div(760, 1680) * 100%;
    position: relative;
    & .map {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: var(--text-midnight-70);
    }
  }
  &__button {
    position: absolute;
    z-index: 5;
    padding: 28px;
    width: 216px;
    height: 220px;
    background: var(--text-avocado);
    left: 40px;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-transform: uppercase;
    color: var(--bg-white);
    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      mask-image: url("/images/icons/arrow-rotate.svg");
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: 40px 40px;
      background-color: currentColor;
      align-self: flex-end;
    }
  }
}
</style>
