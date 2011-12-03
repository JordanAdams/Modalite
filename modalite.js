/*
 * Author = "Jordan Adams";
 * Twitter = "@JordanCallumA";
 * Version = 1.0;
 * Requirements = ["jQuery x.x", "modalite.css"];
 * Github Repo = "http://github.com/JordanAdams/Modalite";
*/

(function($) {
	
	$.modalite = function(content, width) {

		width ? true : width = 300;

		$('body').append(
			'<div class="modalite_overlay"></div>'
			+'<div class="modalite_modal">'
				+ content
				+'<div class="modalite_modal_close"><a href="#">&#10005; Close</div>'
			+'</div>');

		var wnd_w = window.innerWidth;
		var wnd_h = window.innerHeight;

		$('.modalite_modal').css('width', width + "px");

		$('.modalite_overlay').css({
			'width' : wnd_w,
			'height' : wnd_h
		});

		var mdlt_w = $('.modalite_modal').width();
		var mdlt_h = $('.modalite_modal').height();

		var mdlt_t = (wnd_h/2)-(mdlt_h/2);
		var mdlt_l = (wnd_w/2)-(mdlt_w/2);

		$('.modalite_modal').css('top', mdlt_t);
		$('.modalite_modal').css('left', mdlt_l);

		$('.modalite_overlay').fadeTo(350, 0.5);
		$('.modalite_modal').fadeTo(350, 1);
			
	}



	/* HELPER FUNCTIONS */
	function modalite_destroy() {
	
		$('.modalite_overlay').fadeOut(350, function() {	
			$('.modalite_overlay').remove();
		});

		$('.modalite_modal').fadeOut(350, function() {
			$('.modalite_modal').remove();
		});
		
	}
	
	
	
	/* EVENTS */
	$('.modalite_overlay').live('click', function() {
		modalite_destroy();
	});

	$(document).keydown(function(event) {
		
		if(event.keyCode === 27) {
			modalite_destroy();
		}

	});
	
	$('.modalite_modal_close').live('click', function() {
	
		modalite_destroy();
	
	});

})(jQuery);