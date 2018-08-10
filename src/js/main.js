$(document).ready(function() {
	$('.open-input').on('change', function() {
		$('.header-page__menu').slideToggle();
	});

	

	$('.call-me').on('click', function(e) {
		event.preventDefault();
		$('.page-modal').fadeIn();
	});

	$('.page-modal__close').on('click', function() {
		$('.page-modal').fadeOut();
	});

	$('.page-modal__overlay').on('click', function() {
		$('.page-modal').fadeOut();
	});

	if( window.matchMedia("(min-width: 771px)").matches) {
		$('#list-view').on('click', function() {
			$('.product-list').addClass('product-list--column');
		});

		$('#grid-view').on('click', function() {
			$('.product-list').removeClass('product-list--column');
		});
	}



	


	$('.tabs-btn__btn').click(function (e) {
		e.preventDefault()
		$(this).tab('show');
	});

	$('.show-reviews-btn').on('click', function() {
		$('.article__add-reviews').toggleClass('article__add-reviews--visible');
	})

	
	$(".filter__range").slider({
		min: 0,
		max: 1000,
		values: [0,1000],
		range: true,
		stop: function(event, ui) {
			$("#min-inp").val($(".filter__range").slider("values",0));
			$("#max-inp").val($(".filter__range").slider("values",1));
		},
		slide: function(event, ui){
			$("#min-inp").val($(".filter__range").slider("values",0));
			$("#max-inp").val($(".filter__range").slider("values",1));
		}
	});

	$("#min-inp").change(function(){

	var value1=$("#min-inp").val();
	var value2=$("#max-inp").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("#min-inp").val(value1);
	}
	$(".filter__range").slider("values",0,value1);	
});

	
$("#min-inp").change(function(){
		
	var value1=$("#min-inp").val();
	var value2=$("#max-inp").val();
	
	if (value2 > 1000) { value2 = 1000; $("#max-inp").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("#max-inp").val(value2);
	}
	$(".filter__range").slider("values",1,value2);
});


	
	$('.header-page__btn').on('click', function() {
		if( window.matchMedia("(max-width: 771px)").matches) {
			$('.categories').toggleClass('categories--show');
		}

	});

	if( window.matchMedia("(max-width: 767px)").matches) {
		$('.header-page__menu').append($('.header-page__search'));
	}


	$('.home-page__slider').slick({
		slidesToShow: 4,
		slidesToShow: 5,
		initialSlide: 2,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		{
			breakpoint: 845,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 664,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 505,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.slider__cards').slick({
		slidesToShow: 4,
		swipeToSlide: true,
		arrows: true,
		responsive: [
		{
			breakpoint: 1149,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 988,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 569,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 399,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});
	
	$('.slider__category').slick({
		slidesToShow: 6,
		swipeToSlide: true,
		responsive: [
		{
			breakpoint: 1218,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 656,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 472,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});

	$('.product__slider-bottom').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		infinite: false,
		dots: true,
		arrows: false
	});

	$('.colorbox').colorbox({
		overlayClose: true,
		opacity: 0.5,
		rel: "colorbox"
	});

	$('.about__text-wrap').mCustomScrollbar({
		axis: 'y',
		theme: 'my-theme'
	})

	var api;

	api =  $('.slider-1').revolution(
	{
		delay:9000,
		startheight:483,
		startwidth:1170,
		onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

		thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight:50,
		thumbAmount:3,

		hideThumbs:0,
		navigationType:"bullet",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
		navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
		navigationStyle:"round",				//round,square,navbar
		touchenabled:"on",						// Enable Swipe Function : on/off
		navOffsetHorizontal:0,
		navOffsetVertical:20,
		stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


		fullWidth:"on",

		shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
	});
	


	
});