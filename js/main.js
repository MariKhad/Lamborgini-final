const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const arrow = document.querySelector('.arrow');
const menu = document.querySelector('nav');
const links = document.querySelectorAll('.menu-link__inner');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
});

menu.addEventListener('click', function (e) {
	if (e.target.classList.contains('menu-link__inner')) {
		e.preventDefault();

		let link = e.target;
		scrollToId(link.hash);
	}
});

menuMobile.addEventListener('click', function (e) {
	if (e.target.classList.contains('menu-link__inner')) {
		e.preventDefault();

		let link = e.target;
		scrollToId(link.hash);
	}
});

function scrollToId(id) {
	let target = document.querySelector(id);
	let styles = window.getComputedStyle(target);

	if (target !== null) {
		let pos = elemOffsetTop(target) - parseFloat(styles.marginTop);
		scrollToY(pos);
	}
}


const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: '.swiper-button-left',
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		725: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	}
});


window.initMap = initMap;


window.addEventListener('scroll', function () {
	if (window.pageYOffset > window.innerHeight) {
		arrow.classList.add('arrow-show');
	} else {
		arrow.classList.remove('arrow-show');
	}
})

arrow.addEventListener('click', function (e) {
	scrollToY(0);
})

function scrollToY(pos) {
	window.scrollTo({
		top: pos,
		behavior: "smooth"
	})
}

function elemOffsetTop(node) {
	let coords = node.getBoundingClientRect();
	return coords.top + window.pageYOffset;
}


let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 37.231633299851545, lng: -8.628283832326202, },
		zoom: 14,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "30"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "40"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		]

	});
}