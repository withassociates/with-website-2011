$(function() {

  // External links
  //
  $('.container').find('a[href^="http"]').each(function(link){
    var link=$(this)
    link.attr({target:"_blank", title:"Javascript will open this external link in a new window."});
  });

  // Code for global header
  //
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

  // Fetch from Flickr
  //
  $.ajax({
    url: 'http://api.flickr.com/services/rest/',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    data: {
      method      : 'flickr.photosets.getPhotos',
      api_key     : '7612c88fb1ddc90b37bd1e8d2d77c864',
      photoset_id : '72157628027240034',
      extras      : 'url_sq',
      per_page    : 10,
      format      : 'json'
    }
  }).success(function(response) {
    var photos = response.photoset.photo;
    for (var i in photos) { var photo = photos[i];
      var img = $('<img />').
        attr('src', photo.url_sq).
        attr('width', 75).
        attr('height', 75);

      $('<a />').
      attr('rel', 'external').
      attr('target', '_blank').
      attr('href', 'http://www.flickr.com/photos/withassociates/' + photo.id + '/' ).
      append(img).
      appendTo('#photos');
    }
  });


  // Fetch from Instagram
  //
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/wa2011nov/media/recent',
    dataType: 'jsonp',
    data: {
      client_id: '03e358de20914a9d86dc1e6bd666ec6e'
    }
  }).success(function(response) {
    for (var i in response.data) { var photo = response.data[i];
      var img = $('<img />').
        attr('src', photo.images.thumbnail.url).
        attr('width', 75).
        height('height', 75);

      $('<a />').
      attr('rel', 'external').
      attr('target', '_blank').
      attr('href', photo.link).append(img).
      appendTo('#photos');
    }
  });


  // Fetch from Vimeo
  //
  $.ajax({
    url: 'http://vimeo.com/api/v2/album/1736375/videos.json',
    dataType: 'jsonp'
  }).success(function(response) {
    // Make nav
    var nav = $('<nav />');
    var ul = $('<ul />');

    nav.append(ul).appendTo('#vimeos');

    $.each(response, function(i, video) {
      var iframe = $('<iframe />').
      attr('src', 'http://player.vimeo.com/video/' + video.id).
      attr('width', 407).
      attr('height', 305).
      attr('frameborder', 0).
      appendTo('#vimeos');

      var li = $('<li />');
      var a = $('<a />').
        click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          if ($(this).hasClass('active')) return;

          $('#vimeos nav a').removeClass('active');
          $(this).addClass('active');

          $('#vimeos iframe').hide();
          iframe.show();
        }).
        html(video.title);

      li.append(a).appendTo(ul);
    });

    $('#vimeos nav a').first().click();
  });

});

