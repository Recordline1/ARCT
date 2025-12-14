// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, bodyLockStatus, bodyLockToggle, FLS } from "@js/common/functions.js"

import './menu.scss'

export function menuInit() {
	const input = document.querySelector('.header__input');


	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('[data-fls-menu]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute("data-fls-menu-open")
		}
	})
	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('.header__search')) {
			document.documentElement.toggleAttribute("search-open")
			const input = document.querySelector('.header__input');
			input.value = '';
			input.focus();
		}
		document.querySelector('.header__search-close').addEventListener('click', () => {
			input.value = '';
		});
	})
}
document.querySelector('[data-fls-menu]') ?
	window.addEventListener('load', menuInit) : null