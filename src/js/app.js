import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

Fancybox.bind("[data-fancybox]", {
	closeButton: false,
	showClass: "f-scaleOut",
});

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера product-slider
const productSlider = document.querySelector('.product-slider');
var mySwiperProductSlider = new Swiper(productSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 10,
	effect: 'fade',
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true
	},
	autoHeight: true,
	navigation: {
		prevEl: productSlider?.querySelector('.navArrowPrev'),
		nextEl: productSlider?.querySelector('.navArrowNext'),
	},
	pagination: {
		el: document.querySelector('.product-slider .swiper-pagination'),
		clickable: true,
		type: 'bullets',
	},
});

// Инициализация слайдера productCardSlider
document.querySelectorAll('.productCardSlider').forEach(n => {
	const mySwiperProductCard = new Swiper(n, {
		slidesPerView: 6,
		spaceBetween: 22,
		speed: 600,
		loop: false,
		navigation: {
			prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
			nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 22,
			},
			1600: {
				slidesPerView: 5,
			},
			1840: {
				slidesPerView: 6,
			}
		},
	});
});

// Инициализация слайдера adv-about-slider
document.querySelectorAll('.adv-about-slider').forEach(n => {
	const mySwiperAdvAbout = new Swiper(n, {
		slidesPerView: 4,
		spaceBetween: 20,
		speed: 600,
		autoplay: true,
		navigation: {
			prevEl: n.closest('.adv-about').querySelector('.navArrowPrev'),
			nextEl: n.closest('.adv-about').querySelector('.navArrowNext'),
		},
		pagination: {
			el: n.closest('.adv-about').querySelector('.swiper-pagination'),
			clickable: true,
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1600: {
				slidesPerView: 4,
			},
		},
	});
});

// Инициализация слайдера progres-slider
document.querySelectorAll('.progres-slider').forEach(n => {
	const mySwiperProgres = new Swiper(n, {
		slidesPerView: 1,
		spaceBetween: 13,
		speed: 600,
		// freeMode: false,
		watchSlidesProgress: true,
		mousewheel: false,
		navigation: {
			prevEl: n?.closest('.progres').querySelector('.navArrowPrev'),
			nextEl: n?.closest('.progres').querySelector('.navArrowNext'),
		},
		thumbs: { // указываем на превью слайдер
			swiper: {
				el: n.closest('.progres').querySelector('.progres-year-slider'),
				slidesPerView: 'auto',
				spaceBetween: 14,
				speed: 600,
				watchSlidesProgress: true,
				breakpoints: {
					0: {
						spaceBetween: 5,
					},
					1200: {
						spaceBetween: 32,
					},
				},
			}
		},
	});
});

//  Инициализация слайдера partnersSlider
document.querySelectorAll('.partnersSlider').forEach(n => {
	const mySwiperPartners = new Swiper(n, {
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 600,
		loop: true,
		autoplay: true,
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			992: {
				spaceBetween: 20,
			},
		},
	});
});

// Инициализация слайдера docSlider
document.querySelectorAll('.docSlider').forEach(n => {
	const mySwiperDoc = new Swiper(n, {
		slidesPerView: 4,
		spaceBetween: 20,
		speed: 600,
		autoplay: true,
		navigation: {
			prevEl: n.closest('.doc').querySelector('.navArrowPrev'),
			nextEl: n.closest('.doc').querySelector('.navArrowNext'),
		},
		pagination: {
			el: n.closest('.doc').querySelector('.swiper-pagination'),
			clickable: true,
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});
});

// Инициализация слайдера vac-related-slider
document.querySelectorAll('.vac-related-slider').forEach(n => {
	const mySwiperVacRelated = new Swiper(n, {
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 600,
		loop: false,
		pagination: {
			el: n.closest('.sliderW').querySelector('.swiper-pagination'),
			clickable: true,
			type: 'bullets',
		},
		navigation: {
			prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
			nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
});

// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSlider').forEach(n => {
	const mySwiperDoc = new Swiper(n, {
		slidesPerView: 4,
		spaceBetween: 20,
		speed: 600,
		autoplay: true,
		navigation: {
			prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
			nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
});

const togglePasswordArray = document.querySelectorAll('.show-pass');
togglePasswordArray.forEach(el => {
	el.addEventListener('click', () => {
		let password = el.closest('.inputW').querySelector('.formInput--password');
		// Toggle the type attribute using
		// getAttribure() method
		const type = password.getAttribute('type') === 'password' ?
			'text' : 'password';
		password.setAttribute('type', type);
	});
});

// Burger
const btnMenu = document.querySelector('.headerMenuBtn');
const menu = document.querySelector('.menuMobile');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.menuMobileBtnClose');

const toggleMenu = function () {
	menu.classList.toggle('active');
}
const toggleBurger = function () {
	btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
	bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
	toggleBurger();
	bodyOverflow();
	toggleMenu();
}

const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
if (mediaQueryMax991.matches) {
	btnMenu?.addEventListener('click', function (e) {
		e.stopPropagation();
		toggleMenu();
		toggleBurger();
		bodyOverflow();
	});

	btnClose?.addEventListener('click', function (e) {
		menuClose();
	});
}

let filterMobileClose = document.querySelector('.filterMobileClose');
let filterBody = document.querySelector('#filter');
let filterActionBtn = document.querySelector('.filterActionBtn');
filterActionBtn?.addEventListener('click', () => {
	filterBody.classList.add('active');
});
filterMobileClose?.addEventListener('click', () => {
	filterBody.classList.remove('active');
});


let textJsMoreArray = document.querySelectorAll('.text-js-more');
textJsMoreArray.forEach(el => {
	el.addEventListener('click', () => {
		let parent = el.closest('.text-js-wrap');
		let text = parent.querySelector('.text-js-hidden');
		text.classList.add('active');
		el.style.display = 'none';
	});
});