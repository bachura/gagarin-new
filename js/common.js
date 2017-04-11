$(document).ready(function() {

	// Resize bg_image
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
		$(".why__it_head").css("height", $(window).height());
		$(".top_reviews").css("height", $(window).height());
		$(".bg_ivents").css("height", $(window).height());
		$(".bg_contacts").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	// Pop_up form
	$(".mymagicoverbox").click(function()
	{
				$('#myfond_gris').fadeIn(300);
				var iddiv = $(this).attr("iddiv");
				$('#'+iddiv).fadeIn(300);
				$('#myfond_gris').attr('opendiv',iddiv);
				return false;
	});

	$('#modal_close, #dribble_modal_close, #myfond_gris, .mymagicoverbox_fermer').click(function()
	{
				var iddiv = $("#myfond_gris").attr('opendiv');
				$('#myfond_gris').fadeOut(300);
				$('#'+iddiv).fadeOut(300);
	});


	// Scroll to id
	$("a[href*='#']").mPageScroll2id();


	// Read more
	$('.ivents_hidden').hide();
	$('.more').click(function(){
	    $(this).next().toggle()
	});

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


}); 