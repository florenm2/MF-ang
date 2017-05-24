/* 
Name: 			Image Gallery
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	4.8.0

Customized by:  Nick Akiona
*/
(function($) {

	'use strict';

	/*
	Thumb Gallery
	*/
	var $thumbGalleryDetail1 = $('#thumbGalleryDetail'),
		$thumbGalleryThumbs1 = $('#thumbGalleryThumbs'),
		flag = false,
		duration = 300;

	$thumbGalleryDetail1
		.owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			dots: false,
			loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
			navText: []
		})
		.on('changed.owl.carousel', function(e) {
			if (!flag) {
				flag = true;
				$thumbGalleryThumbs1.trigger('to.owl.carousel', [e.item.index-1, duration, true]);
				flag = false;
			}
		});

	$thumbGalleryThumbs1
		.owlCarousel({
			margin: 30,
			items: 6,
			nav: false,
			center: false,
			dots: false
		})
		.on('click', '.owl-item', function() {
			$thumbGalleryDetail1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function(e) {
			if (!flag) {
				flag = true;
				$thumbGalleryDetail1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	

}).apply(this, [jQuery]);