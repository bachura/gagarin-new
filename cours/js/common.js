$(document).ready(function(){

	//Fixed header 
	var $menu = $("#menu"); 
	$(window).scroll(function(){
			if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
					$menu.fadeOut('fast',function(){
							$(this).removeClass("default")
										 .addClass("fixed")
										 .fadeIn('slow');
					});
			} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
					$menu.fadeOut('fast',function(){
							$(this).removeClass("fixed main-head")
										 .addClass("default main-head")
										 .fadeIn('fast');
					});
			}
	});
	
	// header slider
	$('.slider').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 500
	});

	// reviews slider
	$('.reviews_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.reviews_slider-nav'
	});
		$('.reviews_slider-nav').slick({
			slidesToShow: 4,	
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		 	asNavFor: '.reviews_slider',
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '0'
	});
	// $('.rotator-left').click(function(){
	// 		$('.reviews_slider-nav').slick('slickPrev');
	// })
	// $('.rotator-right').click(function(){
	// 		$('.reviews_slider-nav').slick('slickNext');
	// })


	// numbers count
	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

	    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

	    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
	    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

	    var w_height = $(window).height();        // Высота окна браузера
	    var d_height = $(document).height();      // Высота всего документа

	    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

	    if(w_top + 350 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	        $(".spincrement").spincrement({
	            thousandSeparator: "",
	            duration: 3000
	        });

	        show = false;
	    }
	});


	// Parallax
	$('.parallax-window').parallax();

	// Popup form
	$(".mymagicoverbox").click(function()
	{
	      $('#myfond_gris').fadeIn(300);
	      var iddiv = $(this).attr("iddiv");
	      $('#'+iddiv).fadeIn(300);
	      $('#myfond_gris').attr('opendiv',iddiv);
	      return false;
	});

	$('#modal_close, #myfond_gris, .mymagicoverbox_fermer').click(function()
	{
	      var iddiv = $("#myfond_gris").attr('opendiv');
	      $('#myfond_gris').fadeOut(300);
	      $('#'+iddiv).fadeOut(300);
	});

	// Page scroll to id
	$("a[href*='#']").mPageScroll2id();




	// Burger
	$(document).delegate('.open', 'click', function(event){
	$(this).addClass('oppenned');
		event.stopPropagation();
	});
	
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
	});
	
	$(document).delegate('.oppenned', 'click', function(event){
		$('.open').removeClass('oppenned');
		event.stopPropagation();
	});





	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-85073182-1', 'auto');
	ga('send', 'pageview');


});