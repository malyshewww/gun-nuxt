<template lang="pug">
	.text-page
		BreadCrumbs(:list="crumbs")
		.container
			.content
				h1 Заголовок H1
				h2 Заголовок H2
				h3 Заголовок H3
				h4 Заголовок H4
				h5 Заголовок H5
				p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde rerum ratione odio magnam pariatur, vel iusto in veritatis possimus autem fugit voluptate, porro reprehenderit consequatur ad provident minima et!
				ul
					li Сантехника и электрофурнитура высокого класса
					li Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus error enim aliquid excepturi a fugiat modi, maiores ipsam minus at ut laborum iste magnam amet tempora consectetur nostrum. Quasi!Vel asperiores nesciunt porro libero beatae similique fugit cumque saepe nam fugiat ex in, minus fuga quo dolor! Impedit fugit fugiat suscipit exercitationem in? Cupiditate similique magnam non optio quia.
					li Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus error enim aliquid excepturi a fugiat modi, maiores ipsam minus at ut laborum iste magnam amet tempora consectetur nostrum. Quasi!Vel asperiores nesciunt porro libero beatae similique fugit cumque saepe nam fugiat ex in, minus fuga quo dolor! Impedit fugit fugiat suscipit exercitationem in? Cupiditate similique magnam non optio quia.
					li Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus error enim aliquid excepturi a fugiat modi, maiores ipsam minus at ut laborum iste magnam amet tempora consectetur nostrum. Quasi!Vel asperiores nesciunt porro libero beatae similique fugit cumque saepe nam fugiat ex in, minus fuga quo dolor! Impedit fugit fugiat suscipit exercitationem in? Cupiditate similique magnam non optio quia.
					li Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus error enim aliquid excepturi a fugiat modi, maiores ipsam minus at ut laborum iste magnam amet tempora consectetur nostrum. Quasi!Vel asperiores nesciunt porro libero beatae similique fugit cumque saepe nam fugiat ex in, minus fuga quo dolor! Impedit fugit fugiat suscipit exercitationem in? Cupiditate similique magnam non optio quia.
				ol
					li Апартаменты с отделкой под ключ
					li Апартаменты с отделкой под ключ
					li Апартаменты с отделкой под ключ
					li Апартаменты с отделкой под ключ
					li Апартаменты с отделкой под ключ
				a(href="/") kaskad2601500@yandex.ru
				.table-wrap
					table
						thead
							tr
								th Характеристики
								th Описание
								th Описание
						tbody
							tr
								td Жилая площадь апартаментов
								td 40,3 м²
								td 40,3 м²
							tr
								td Жилая площадь апартаментов
								td 40,3 м²
								td 40,3 м²
							tr
								td Жилая площадь апартаментов
								td 40,3 м²
								td 40,3 м²
			.galleries
				SliderGallery(:slider="slider" slider-caption="Варианты дизайнерской отделки" :isDescr="true")
				StaticGallery
</template>

<script setup>
const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Текстовая страница",
      path: "/",
   },
];
const slider = [
   {
      img: "1",
      alt: "описание",
   },
   {
      img: "2",
      alt: "описание",
   },
   {
      img: "3",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
];
</script>

<style lang="scss" scoped>
.galleries {
   display: grid;
   grid-template-columns: 100%;
   gap: 156px;
}
</style>
