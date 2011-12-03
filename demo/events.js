$(document).ready(function() {

	$('#example_img').click(function() {
		
		$.modalite(
			'<img id="example_img" src="http://placehold.it/300x150"><p style="margin: 5px 0px 0px 0px; text-align: center; font-size: 80%;">Modalite Demo</p>'
		);

	});

});