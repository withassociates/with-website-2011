var i=0;

document.observe("dom:loaded", function() {
  externalNewWindow();
  formLabels();
	jobsText();
  googleMap();
	//getTweets();
  //tweetInterval=setInterval('showTweet('+i+')', 3000);
});

function externalNewWindow(){
  $$('a[href^=http://]:not(a[href^=http://withassociates.tumblr.com])').each(function(link){
    link.writeAttribute({target:"_blank", title:"Javascript will open this external link in a new window."});
    return false;
  });
}

function googleMap(){
  if (document.getElementById('map_canvas')){
		function loadMap() {
			if (GBrowserIsCompatible()) {
				var map = new GMap2(document.getElementById("map_canvas"));
				var latlong = new GLatLng(51.542530, -0.080100);
				map.setCenter(latlong, 15);
				map.addControl(new GLargeMapControl());
				map.addControl(new GMapTypeControl());
				map.addOverlay(new GMarker(latlong))
			}
		}
		loadMap()
  }
}

function formLabels(){
	$$('.nolabel').each(function(li){
		var thelabel=li.select('label')[0];
		var theinput=li.select('input')[0];
		thelabel.addClassName('hide');
		theinput.addClassName('withlabel');
		theinput.writeAttribute({"value":thelabel.innerHTML})
		theinput.observe('focus', function(clicked){
			theinput.writeAttribute({"value":""})
		})
		theinput.observe('blur', function(clicked){
			if (theinput.readAttribute("value") == '') theinput.writeAttribute({"value":thelabel.innerHTML})
		})
	})
}

function jobsText(){
  $$('.icons li:first-child')[0].addClassName('first');
  $$('.icons li').each(function(li){
    var a = li.down('a')
    var text = '<span class="info">'+a.innerHTML+'</span>';
    a.insert({bottom:text});
    li.observe('mouseover', function(){
      li.down('.info').addClassName('hover');
    })
    li.observe('mouseout', function(){
      li.down('.info').removeClassName('hover');
    })
  })
}
