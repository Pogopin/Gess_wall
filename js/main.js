// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");

	
	$(".tab_item").not(":first").hide();
	$(".s_advante .tab").click(function() {
		$(".s_advante .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab_item_2").not(":first").hide();
	$(".s_paiment-delivery .tab_2").click(function() {
		$(".s_paiment-delivery .tab_2").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item_2").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.header_slider, .item_application, .reviewse-sl').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: true
		// autoHeight: true
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});




