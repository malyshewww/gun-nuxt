<template lang="pug">
	footer.footer
		.container
			.footer__wrapper
				.footer__logo-top
					img(:src="`/images/footer-logo-top.svg`" alt="логотип")
				.footer__body
					.footer__main.main-footer
						.main-footer__column
							.main-footer__label Офис продаж
							.main-footer__contacts.contacts-footer
								.contacts-footer__item
									address.contacts-footer__address г. Нижний Новгород, ул. Ковалихинская, 8Б (ориентир — Центр Международной торговли)
									.contacts-footer__schedule.schedule-footer
										ul.schedule-footer__list
											li.schedule-footer__item ПН-ЧТ: 9:00–19:00
											li.schedule-footer__item ПТ: 9:00–18:00
											li.schedule-footer__item СБ: 10:00–16:00
											li.schedule-footer__item ВС: Выходной
								.contacts-footer__item
									.contacts-footer__links
										a(href="tel:+78312662195").footer__phone +7 831 266-21-95
										EmailLink(email="kaskad2601500@yandex.ru")
									.contacts-footer__social.social
										ul.social__list
											li.social__item
											a(href="#" target="_blank").social__link
												svg(width="28", height="28", viewBox="0 0 28 28", fill="none", xmlns="http://www.w3.org/2000/svg")
													path(d="M14.8938 19.8334C8.45705 19.8334 4.80954 15.494 4.6665 8.16675H7.88489C7.95641 13.5021 10.3881 15.7785 12.2476 16.2054V8.16675H15.2514V12.7907C17.1109 12.5773 19.042 10.5143 19.6857 8.16675H22.6895C22.1889 11.0123 20.0433 13.1464 18.5413 14.0001C20.0433 14.7115 22.4749 16.5611 23.3332 19.8334H19.9717C19.2565 17.6281 17.4685 15.9208 15.1084 15.6363V19.8334H14.8938Z", fill="#878C9A")
						.main-footer__column
							.main-footer__label Офис продаж
							.main-footer__form
								form(action="#").subscribe-form
									.subscribe-form__body
										.subscribe-form__title Оставьте свои контактные данные — и наш менеджер свяжется с вами
										.subscribe-form__items 
											.form-item
												.form-item__field
													input(type="text" name="name" placeholder="Имя")
											.form-item
												.form-item__field
													input(type="text" name="phone" placeholder="Телефон")
										.subscribe-form__bottom
											UiButton(text="отправить" class-names="btn-green")
											.subscribe-form__text Отправляя заявку, вы подтверждаете, что ознакомлены и согласны с условиями политики обработки персональных данных
							.main-footer__info.info-footer
								nuxt-link(to="/").info-footer__link Информация о проекте и проектная документация
								.info-footer__company.company-footer
									.company-footer__label Создание сайта
									a(href="#").company-footer__logo




</template>
