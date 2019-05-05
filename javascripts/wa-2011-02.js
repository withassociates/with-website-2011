$(document).ready(function() {
	$('a#next').click(function(e) {
		e.preventDefault();
	});
	$('a#prev').click(function(e) {
		e.preventDefault();
	});
	
	$('#slideshow').cycle({ 
	    fx:     'fade', 
	    speed:  'slow', 
	    timeout: 6500, 
	    next:   'a#next', 
	    prev:   'a#prev' ,
		requeueOnImageNotLoaded: true
	});
	
	$('#news_slideshow').cycle({ 
	    fx:     'fade', 
	    speed:  'slow', 
	    timeout: 0, 
	    next:   'a#next2', 
	    prev:   'a#prev2' ,
		requeueOnImageNotLoaded: true
	});
	
	$('a.tip').tipsy({
		gravity:'s',
		html:true,
		delayOut: 270
	});

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
