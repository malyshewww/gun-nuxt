<template lang="pug">
	.flats-scheme__floors
		.flats-scheme__floor(v-for="(item, index) in reverseFloors" :key="index")
			.flats-scheme__number {{item}}
			ul.flats-scheme__inner
				li.flats-scheme__room(
					v-for="(room, idx) in corpus.floors.floorFlats"
					:key="idx" :data-status="room.status"
					:data-price="room.price"
					:data-area="room.area"
					:class="room.status"
					@mouseenter="showDetailRoom($event, room)"
					@mouseleave="hideDetailRoom") 100
			a(:href="`/images/flat-scheme/plan.png`" :data-fancybox="`plan-${item}`").flats-scheme__link План этажа
		.flats-scheme__bottom
			.flats-scheme__caption Нежилые помещения
			.flats-scheme__floor.empty
				.flats-scheme__number 1-5
				ul.flats-scheme__inner
					li.flats-scheme__room(v-for="(item, index) in 31")
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps({
   corpus: {
      type: Object,
      required: true,
   },
});

const reverseFloors = computed(() => {
   return props.corpus.floorsNumber.reverse();
});

const emit = defineEmits(["openTooltip", "closeTooltip"]);

const showDetailRoom = (event, currentRoom) => {
   console.log(currentRoom);
   if (window.innerWidth >= 1024) {
      emit("openTooltip", event, currentRoom);
   }
};

const hideDetailRoom = () => {
   if (window.innerWidth >= 1024) {
      emit("closeTooltip");
   }
};

onMounted(() => {
   Fancybox.bind(`[data-fancybox]`, { Hash: false });
});
</script>

<style lang="scss" scoped>
.flats-scheme {
   &__caption {
      font-weight: 600;
      line-height: 22px;
      color: var(--text-gray);
      margin-left: 47px;
   }
   &__bottom {
      margin-top: 41px;
   }
   &__floor {
      display: flex;
      align-items: center;
      @media (any-hover: hover) {
         &:hover {
            & .flats-scheme__link,
            & .flats-scheme__inner::after {
               opacity: 1;
            }
            & .flats-scheme__inner::before {
               opacity: 0;
            }
         }
      }
      &.empty {
         pointer-events: none;
         user-select: none;
         & .flats-scheme__room {
            border: 1px solid var(--text-gray);
            background-color: transparent;
            pointer-events: none;
         }
      }
      &:not(:last-child) {
         & .flats-scheme__inner {
            &::before {
               content: "";
            }
         }
      }
   }
   &__number {
      width: 23px;
      flex-shrink: 0;
      font-weight: 600;
      line-height: 22px;
      white-space: nowrap;
      margin-right: 24px;
   }
   &__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: var(--text-gray);
      white-space: nowrap;
      padding: 0 38px 0 38px;
      opacity: 0;
      transition: opacity $time;
      position: relative;
      z-index: 2;
   }
   &__inner {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 14px 0;
      position: relative;
      isolation: isolate;
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
      &::before {
         content: none;
         position: absolute;
         bottom: -1px;
         left: 0;
         background-color: var(--bg-gray);
         display: block;
         height: 1px;
         width: 100%;
         transition: opacity $time;
      }
      &::after {
         content: "";
         display: block;
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: -10px;
         background-color: #eaeaea;
         border-radius: 5px;
         background: var(--bg-white-dirt);
         z-index: -1;
         transition: opacity $time;
         opacity: 0;
         width: calc(100% + 177px);
      }
   }
   &__room {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 5px;
      padding: 4px;
      display: grid;
      place-items: center;
      font-size: 14px;
      line-height: 18px;
      color: var(--text-gray);
      transition: background-color $time, color $time;
      &.booked {
         background-color: var(--bg-gray);
      }
      &.in-sell {
         color: var(--text-white);
         background-color: var(--text-avocado);
      }
      &.sold {
         pointer-events: none;
         user-select: none;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            background-color: var(--bg-midnight-30);
         }
         &.booked:hover {
            color: var(--text-white);
         }
      }
   }
}
</style>
