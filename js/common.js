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
	var $page = $("html, body");
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, "href")).offset().top
	    }, 650);
	    return false;
	});

	// Read more
	// $(".more").on("click", function(){
	// 	$('.ivents_hidden').toggle().toggleClass("vis");
	// 	$('.more').css("display","none");
	// })

	$('.ivents_hidden').hide();
	$('.more').click(function(){
	    $(this).next().toggle()
	});


}); 