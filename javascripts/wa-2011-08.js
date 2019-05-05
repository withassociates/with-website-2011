$(document).ready(function() {

	$("a.readmore").fancybox({
		padding: 0,
		transitionIn: 'none',
		transitionOut: 'none',
		overlayOpacity: 1
	});
	
	$("footer .dog").click(function(){
	  $(this).toggleClass('sit');
	  return false
	})
	
});
