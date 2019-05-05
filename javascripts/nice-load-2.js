var NiceLoad = {
	
	load: function(element) {
		$loading = element.find('span')
		$img = element.find('img')
		$loading.css('height',$img.attr('height'))
		$loading.css('width',$img.attr('width'))
		$loading.show();
		
		element.each(function(index,elem) {
			$(elem).data('src',$(elem).find('img').attr('src'))
		});
		$img.attr('src','#')
		
		element.each(function(index,elem) {
			$e = $(elem)
			$i = $e.find('img')
			$i.bind('load readystatechange',function(e) {
				if (this.complete || (this.readyState == 'complete' && e.type =='readystatechange')) {
					$(e.target).siblings('span').fadeOut(300)
				}
			})
			$i.attr('src',$e.data('src'))
			
		}) 		
	}
	
}
;
