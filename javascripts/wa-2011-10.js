$(document).ready(function() {
  externalLinks();
  NiceLoad.load($('.bks div'));
  
  $(".fancy").fancybox({
    'overlayOpacity'  : 0.6,
    'overlayColor'    : '#000',
    'autoDimensions'  : true,
    'padding'         : '35'
  });
  
  // Code for global header
  
	$('.global_header a.toggle').click(function(e) {
		e.preventDefault();
		if ($('.global_header').hasClass('open')){
		  $('#more').fadeOut('fast', function(){
		    $('#main').animate({top: '58px'}, 200);
		    $('.global_header').animate({height:'58px'}, 200, function(){
        	$('nav ul').fadeIn('fast');
        	$('.global_header').removeClass('open');
		    });
		  });  
		  $(this).text('What’s this?')
    }else{
      $('nav ul').fadeOut('fast', function(){
        $('#main').animate({top: '280px'}, 200);
        $('.global_header').animate({height:'280px'}, 200, function(){
          $('#more').fadeIn('fast');
        	$('.global_header').addClass('open');
        });
      });
      $(this).text('Close')
    }
	});	
	// End global header code
});

function externalLinks(){
  $('.container').find('a[href^="http"]').each(function(link){
    var link=$(this)
    link.attr({target:"_blank", title:"Javascript will open this external link in a new window."});
  });
}
;
