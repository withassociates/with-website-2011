$(document).ready(function() {
	$('.content').bind('inview', function (event, visible) {
	  if (visible == true) {
	  	$(this).delay(300).fadeTo('slow', 1);
	  } else {
	    $(this).fadeTo('slow', 0.05);
	  }
	});
	
	$('a.next').click(function(e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top - 150;
				$('html,body').animate({scrollTop: targetOffset}, 800);
				return false;
			}
		}
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

Cufon.replace('.container p');