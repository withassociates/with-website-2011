$(document).ready(function() {
	// Code for global header
	$('nav.global_header a.toggle').toggle(openNav,closeNav);
	
	$('a#less').click(function() {
		closeNav();
	});
	

	$('.global_header a.toggle').click(function(e) {
		//e.preventDefault();
	});	
	// End global header code
});


function openNav(){
	$('.global_header').animate({height:'308px'}, 200);
	$('p#short_text').fadeOut('fast', function() {
		$('p#long_text').fadeIn('fast');
		$('ul#months').fadeIn('fast');
	});
	$('.dropdown a#current').text('Close');
	$('.dropdown a#current').addClass('close');
}

function closeNav(){
	$('nav.global_header').animate({height:'36px'}, 200);
	$('p#long_text').fadeOut('fast', function(e) {
		$('p#short_text').fadeIn('fast');
		$('ul#months').fadeOut('fast');
	});
	$('.dropdown a#current').text('Index');
	$('.dropdown a#current').removeClass('close');
}
