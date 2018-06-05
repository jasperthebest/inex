	/* Build-in */

	/* Ready function */
	$(function() {
		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);
		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')'});
		});
		/* Outside Click */
		$('body').click(function(){
			$('.popupshow').removeClass('active');
		});
		$('.descslider').click(function(e){
			e.stopImmediatePropagation();
		});
		/* Home Sliders */
		$('.fullhomeslider').slick({
		  autoplay: true,
		  autoplaySpeed: 3500,
		  dots: false,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  adaptiveHeight: true,
		  prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><i class="fi fi-angle-left"></i></a>',
		  nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow"><i class="fi fi-angle-right"></i></a>'
		});
		/* Popup slider */
		$('.slidershower').slick({
		  autoplay: false,
		  autoplaySpeed: 3500,
		  dots: false,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  adaptiveHeight: true,
		  prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><i class="fi fi-arrow-left"></i></a>',
		  nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow"><i class="fi fi-arrow-right"></i></a>'
		});
		$('.prevslider').click(function(){
			$('.slidershower').slick('slickPrev');
		});
		$('.nextslider').click(function(){
			$('.slidershower').slick('slickNext');
		});
		/* Certificate Slider */
		$('.slidercertify').slick({
		  autoplay: true,
		  autoplaySpeed: 3500,
		  dots: false,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  arrows: true,
		  prevArrow:'<a href="javascript:void(0);" class="slick-prev slick-arrow"><i class="fi fi-arrow-left-l"></i></a>',
		  nextArrow:'<a href="javascript:void(0);" class="slick-next slick-arrow"><i class="fi fi-arrow-right-l"></i></a>',
		  responsive: [
		    {
		      breakpoint: 950,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }]
		});
		/* Feature Projects */
		$('.featureprojectslider').slick({
		  autoplay: true,
		  autoplaySpeed: 3500,
		  dots: true,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 950,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }]
		});
		$('.contentabtscroll').slick({
		  dots: false,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  adaptiveHeight: true
		});
		/* Scroll down */
		$('.scrolltodown').click(function(){
			if($(window).width() > 1024) {
				$("html, body").animate({ scrollTop: $('#titletoper').offset().top }, 1000);
			} else {
				$("html, body").animate({ scrollTop: $('#titletoper').offset().top - 68 }, 1000);
			}
		});
		/* Popup open / close */
		$('.singlefeatimg a').click(function(){
			$('.popupshow').addClass('active');
			return false;
		});
		$('.closepop').click(function(){
			$('.popupshow').removeClass('active');
			return false;
		});
		/* Search */
		$('.searchbox').click(function(){
			if($('.searchbox i').hasClass('fi-search')) {
				$('.searchbox i').removeClass('fi-search').addClass('fi-close-a');
			} else {
				$('.searchbox i').removeClass('fi-close-a').addClass('fi-search');
			}
			$('.searchbelow').toggleClass('active');
			return false;
		});
		/* Filter Init */
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows'
		});
		/* Filter Open Mobile */
		$('.filterdrop span').click(function(){
			$('.filterarea ul').addClass('active');
		});
		/* Filter Click Change */
		$('.filterarea ul li').click(function(){
			$('.filterarea ul li').removeClass('active');
			$('.filterdrop span').text($(this).text());
			$('.filterarea ul').removeClass('active');
			$(this).addClass('active');
			var datafilter = $(this).data('filter');
			if(datafilter == "all") {
				$grid.isotope({ filter: '*'});
			} else {
				$grid.isotope({ filter: '.' +  datafilter});
			}
		});
		/* Hamburger Menu */
		$('#nav-icon').click(function(){
			$('#nav-icon, nav').toggleClass('active');
		});
		/* Slider Goto */
		$('.topnavscroll ul li span').click(function(){
			$('.topnavscroll ul li').removeClass('active');
			$(this).parent().addClass('active');
			$('.contentabtscroll').slick('slickGoTo', $(this).parent().index());
		});
		/* Certify Popup Activate 
		$('.certifybox > div').click(function(){
			$('.certifypopup').addClass('active');
			return false;
		}); */
		/* Scroll Animation */ 
		$('*[data-animated]').addClass('animated');
			function animated_contents() {
			$(".animated:appeared").each(function (i) {
				var $this    = $(this),
					animated = $(this).data('animated');
				setTimeout(function () {
					$this.addClass(animated);
				}, 70 * i);
			});
		}
		
		/* Init Function */
		animated_contents();
		$(window).scroll(function() {
			animated_contents();
		});
	});

	/* Scroll */
	$(window).scroll(function() {
		
	});
	
	/* Resize */
	if(!Modernizr.touch) {
	$(window).resize(function(){

		/* Init Function */
		
	});
	}

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */
	});
