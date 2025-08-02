import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

Fancybox.bind("[data-fancybox]", {
	closeButton: true,
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
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 22,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
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
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
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
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
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
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
});