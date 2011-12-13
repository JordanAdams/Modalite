$(document).ready(function() {

	$('#example_img').click(function() {
		$.modalite('<img id="example_img" src="http://placehold.it/300x150">', {
			width: 300
		});
	});
	
	$('#example_dark').click(function() {
		$.modalite('<p style="margin: 0px; text-align: center;">Welcome to the dark side...</p>', {
			theme: 'dark',
			width: 300
		});
	});
	
	$('#example_iframe').click(function() {
		$.modalite('<iframe style="border: none; width: 700px; height: 500px;" src="http://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Big+Ben,+London&amp;aq=0&amp;sll=51.521775,-0.14883&amp;sspn=0.086196,0.110722&amp;vpsrc=0&amp;ie=UTF8&amp;hq=Big+Ben,+London&amp;hnear=&amp;radius=15000&amp;t=h&amp;layer=c&amp;cbll=51.500956,-0.125411&amp;panoid=Suvmsm_HtVYYbYsUBLljHQ&amp;cbp=13,125.29,,0,-25.57&amp;ll=51.48165,-0.124969&amp;spn=0.067136,0.192947&amp;z=12&amp;output=svembed"></iframe>', {
			width: 700
		})
	});
	
	$('#example_facebook').click(function() {
		$.modalite('<p style="margin: 0px;">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>', {
			theme: 'facebook',
			width: 300
		})	
	});

});