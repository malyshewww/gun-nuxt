<template lang="pug">
	.contacts__map
		#mapElem.map
</template>

<script setup>
const coords = [44.012679, 56.323597];

// const isLoaded = ref(false);
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

onMounted(() => {
   let isLoaded = false;
   const mapElem = document.getElementById("mapElem");
   function loadMap() {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${runtimeConfig.public.apiKey}&lang=ru_RU`;
      document.body.appendChild(script);
      isLoaded = true;
      script.onload = function () {
         initMap();
      };
   }

   async function initMap() {
      await ymaps3.ready;
      const {
         YMap,
         YMapDefaultSchemeLayer,
         YMapDefaultFeaturesLayer,
         YMapMarker,
      } = ymaps3;
      const map = new YMap(document.getElementById("mapElem"), {
         location: {
            center: coords,
            zoom: 16,
         },
         behaviors: [
            "drag",
            "multiTouch",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
            "pinchZoom",
            "dblClick",
            "magnifier",
         ],
      });
      // Добавьте слой с дорогами и зданиями
      map.addChild(new YMapDefaultSchemeLayer({}));
      // Добавьте слой для маркеров
      map.addChild(new YMapDefaultFeaturesLayer());
      const content = document.createElement("img");
      content.classList.add("map-contacts__point");
      content.src = "/images/icons/pin.svg";
      // Инициализируйте маркер
      const marker = new YMapMarker(
         {
            coordinates: coords,
            draggable: false,
         },
         content
      );
      map.addChild(marker);
      if (window.innerWidth < 1024) {
         map.setBehaviors([
            "multiTouch",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
            "pinchZoom",
            "dblClick",
            "magnifier",
         ]);
         const mapLayout = document.getElementById("mapElem");
         if (mapLayout) {
            const pane = document.createElement("div");
            pane.innerHTML =
               "Чтобы переместить карту проведите по ней двумя пальцами";
            pane.style.cssText =
               "height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 4; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;";
            mapLayout.append(pane);
            mapLayout.addEventListener("touchmove", function (e) {
               const touches = e.touches.length;
               if (touches > 1) {
                  // Если точек касания больше одной
                  pane.style.opacity = "0";
                  pane.style.pointerEvents = "none";
                  mapLayout
                     .querySelector(".ymaps3x0--map")
                     .classList.remove("not-touch");
                  map.setBehaviors([
                     "drag",
                     "multiTouch",
                     "dblClickZoom",
                     "rightMouseButtonMagnifier",
                     "pinchZoom",
                     "dblClick",
                     "magnifier",
                  ]);
               } else {
                  pane.style.opacity = "1";
                  pane.style.pointerEvents = "";
                  mapLayout
                     .querySelector(".ymaps3x0--map")
                     .classList.add("not-touch");
                  map.setBehaviors([
                     "multiTouch",
                     "dblClickZoom",
                     "rightMouseButtonMagnifier",
                     "pinchZoom",
                     "dblClick",
                     "magnifier",
                  ]);
               }
            });
            mapLayout.addEventListener("touchend", () => {
               pane.style.opacity = "0";
            });
         }
      }
   }
   const observer = new IntersectionObserver(([entry]) => {
      const targetInfo = entry.boundingClientRect;
      const rootBoundsInfo = entry.rootBounds;
      if (
         (!isLoaded && targetInfo.top < rootBoundsInfo.bottom) ||
         targetInfo.isIntersecting
      ) {
         loadMap();
         observer.unobserve(entry.target);
      }
   }, {});
   observer.observe(mapElem);
});
</script>

<style lang="scss">
.contacts {
   &__map {
      width: 100%;
      height: 100%;
      & .map {
         width: 100%;
         height: 100%;
      }
   }
}
</style>
