import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import AirDatepicker from 'air-datepicker';

import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/select2.min.js";

import './components.js';

Fancybox.bind("[data-fancybox]", {
	closeButton: false,
	showClass: "f-scaleOut",
});


$("li").each(function () {
	$(this).addClass("foo");
});

$(".formSelect select").each(function () {
	$(this).select2(

	);
});

// $(document).ready(function () {
// 	$('.formSelect select').select2(

// 	);
// });

flsFunctions.isWebp();

let skuArray = document.querySelectorAll('.sku');
skuArray.forEach(el => {
	var clipboard = new ClipboardJS(el);

	clipboard.on('success', function (e) {
		let copyText = el.querySelector('.copyText');
		copyText.classList.add('active');
		setTimeout(function () {
			copyText.classList.remove('active');
		}, 2000);
		e.clearSelection();
	});

});


let formCalendarArray = document.querySelectorAll('.formCalendar--bottom-left-range');
formCalendarArray.forEach(el => {
	new AirDatepicker(el, {
		range: true,
		autoClose: true,
		// position: "top left",
	})
});

let formCalendarArrayRange = document.querySelectorAll('.formCalendar--no-range');
formCalendarArrayRange.forEach(el => {
	new AirDatepicker(el, {
		range: false,
		autoClose: true,
		// position: "top left",
	})
});

let formCalendarArrayTopLeft = document.querySelectorAll('.formCalendar--top-left--range');
formCalendarArrayTopLeft.forEach(el => {
	new AirDatepicker(el, {
		range: true,
		position: "top left",
		autoClose: true,
	})
});

function inputFileToggle() {
	const inputs = document.querySelectorAll('input[type="file"]');

	if (inputs.length) {
		inputs.forEach(input => {

			input.addEventListener("change", (e) => {
				const label = document.querySelector(`label[for="${input.id}"]`);

				if (label && e.target.files[0]) {
					const labelTitle = label.querySelector("span");

					if (labelTitle) {
						labelTitle.textContent = "Файл выбран";
					} else {
						label.textContent = "Файл выбран";
					}
				}
			})
		})
	}
}

inputFileToggle();

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


let contextBtnArray = document.querySelectorAll('.button-more');
contextBtnArray.forEach(el => {
	parent = el.closest('.context-wrap');
	let contentItem = parent.querySelector('.context-menu');
	el.addEventListener('click', () => {
		contentItem.classList.toggle('active');
		el.classList.toggle('active');
	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_content = target == contentItem || contentItem.contains(target);
		let its_btn_content = target == el || el.contains(target);

		if (!its_content && !its_btn_content) {
			contentItem.classList.remove('active');
		}

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



$(document).on("scroll", window, function () {
	if ($(window).scrollTop() > 200) {
		$(".productAddToCartWrapper").addClass('active');
	}
	else {
		$(".productAddToCartWrapper").removeClass('active');
	}
});


let productAddToCart = document.querySelector('.productAddToCart');
productAddToCart?.addEventListener('click', () => {
	productAddToCart.querySelector('span').style.display = 'none';
	productAddToCart.closest('.productAddToCartWrapper').querySelector('.quantity').classList.add('active');
	productAddToCart.classList.add('button--round');
});

let productMainAllParams = document.querySelector('.productMainAllParams');

let productParamsTabsBtn = document.querySelector('.tabs__nav-btn--params');
productMainAllParams?.addEventListener('click', () => {
	productParamsTabsBtn.click();
});

let cartWidgetClose = document.querySelector('.cartWidgetClose');
let cartBtnW = document.querySelector('.cartBtnW');
let cartBtnInner = document.querySelector('.cartBtnInner');
cartBtnInner?.addEventListener('click', () => {
	cartBtnW.classList.add('active');
});
cartWidgetClose?.addEventListener('click', () => {
	cartBtnW.classList.remove('active');
});


// document.addEventListener('DOMContentLoaded', () => {
// 	// const hero = document.querySelector('main .sect');
// 	const header = document.querySelector('#header');
// 	const mainEl = document.querySelector('.main');

// 	const headerFixed = () => {
// 		let scrollTop = window.scrollY;
// 		let heroCenter = 400;

// 		if (scrollTop >= heroCenter) {
// 			header.classList.add('active')
// 			mainEl.style.marginTop = `${header.offsetHeight}px`;
// 		} else {
// 			header.classList.remove('active')
// 			mainEl.style.marginTop = `0px`;
// 		}
// 	};

// 	headerFixed();

// 	window.addEventListener('scroll', () => {
// 		headerFixed();
// 	});
// });

// const headerContainer = document.querySelector(".wrapper");

// if (headerContainer) {
// 	const headerSticky = document.querySelector(".header");
// 	const offsetTop = headerContainer.clientHeight;

// 	let lastScrollTop = 0;

// 	window.addEventListener("scroll", () => {

// 		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// 		if (window.matchMedia("(min-width: 992px)").matches) {
// 			if (scrollTop > offsetTop && scrollTop > lastScrollTop) {
// 				headerSticky.classList.add("_scroll");
// 				console.log('231');
// 			} else {
// 				headerSticky.classList.remove("_scroll");
// 			}
// 		} else {
// 			if (scrollTop > offsetTop && scrollTop > lastScrollTop) {
// 				headerContainer.classList.add("_scroll");
// 			} else {
// 				headerContainer.classList.remove("_scroll");
// 			}
// 		}

// 		lastScrollTop = scrollTop;
// 	});
// }

// Sticky header
const header = document.querySelector('.header');
const first = document.querySelector('.wrapper');

const bodyHeight = first.scrollHeight;

const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('active');		
		first.style.marginTop = null;	

	} else {
		header.classList.add('active');	
		first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('active');		
		first.style.marginTop = null;
	}	
	
	let sum = bodyHeight - scrollDistance;



	lastScrollTop = scrollDistance;

});

let addAddressDelivery = document.querySelector('.add-address-delivery');

addAddressDelivery?.addEventListener('click', () => {
	document.querySelector(".add-address-clone-wrapper").appendChild(document.querySelector(".add-address-block").cloneNode(true));
});

function hideAllLetter() {
	let brandsRowArray = document.querySelectorAll('.brandsRow');
	brandsRowArray.forEach(el => {
		el.style.display = 'none';
	});
}

function showLetter() {
	let brandsItemArray = document.querySelectorAll('.brandsItem');
	let brandsRowArray = document.querySelectorAll('.brandsRow');
	brandsItemArray.forEach(el => {
		el.addEventListener('click', () => {
			hideAllLetter();
			brandsRowArray.forEach(row => {
				if (el.dataset.letter == row.dataset.letter) {
					row.style.display = 'block';
				}
			});
		});
	});
}

showLetter();
