/*
 * Author = "Jordan Adams";
 * Twitter = "@JordanCallumA";
 * Version = 1.2;
 * Requirements = ["jQuery x.x", "modalite.css"];
 * Github Repo = "http://github.com/JordanAdams/Modalite";
*/

(function($) {
	
	$.modalite = function(content, options) {
		
		// Build Settings
		defaults = {
			theme: 'light',
			width: 300,
			remote: false
		};
		
		settings = {};
		settings = $.extend(defaults, options);


		// Create DOM Elems
		$('body').append(
			'<div class="modalite_overlay"></div>'
			+'<div class="modalite_modal">'
				+ '<div class="modalite_content">'+content+'</div>'
				+'<div class="modalite_modal_close"><a href="#">&#10005; Close</div>'
			+'</div>'
		);


		// Add Remote Content?
		if(settings.remote) {

			$('.modalite_content').html('');
			$('.modalite_content').load(content);

		}


		// Add Theme
		$('.modalite_modal').addClass('theme_' + settings.theme);
		$('.modalite_modal_close').addClass('theme_' + settings.theme);
		$('.modalite_overlay').addClass('theme_' + settings.theme);

		// Extra Theme Stuff
		switch (settings.theme) {
			
			case 'facebook':
				$('.modalite_modal_close a').text('Close');
				$('.modalite_modal').children().wrapAll('<div class="modalite_modal_facebook" />');
			break;

		}


		// Position & Size
		$('.modalite_overlay').css({
			'width' : '100%',
			'height' : '100%'
		});
		
		$('.modalite_modal').css('width', settings.width + "px");

		var wnd_w = window.innerWidth;
		var wnd_h = window.innerHeight;
		
		var mdlt_w = $('.modalite_modal').width();
		var mdlt_h = $('.modalite_modal').height();

		var mdlt_t = (wnd_h/2)-(mdlt_h/2);
		var mdlt_l = (wnd_w/2)-(mdlt_w/2);

		$('.modalite_modal').css('top', mdlt_t);
		$('.modalite_modal').css('left', mdlt_l);
		
		
		// Display Modalite
		switch (settings.theme) {
			case 'light':
				$('.modalite_overlay').fadeTo(350, 0.5);
				$('.modalite_modal').fadeTo(350, 1);
			break;
			
			case 'dark':
				$('.modalite_overlay').fadeTo(350, 0.75);
				$('.modalite_modal').fadeTo(350, 1);
			break;
			
			case 'facebook':
				$('.modalite_overlay').fadeTo(350, 0);
				$('.modalite_modal').fadeTo(350, 1);
			break;
		}
			
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
	
	$('.modalite_modal_close a').live('click', function() {
	
		modalite_destroy();
	
	});

})(jQuery);