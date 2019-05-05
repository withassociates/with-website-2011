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

  NiceLoad.load($('.niceload li'));

  // Fade in logo
  //
  $(window).load(function() {
    $('#logo_with').delay(1000).animate({ opacity: 1 }, 750);
    $('#logo_associates').delay(1250).animate({ opacity: 1 }, 750);
  });

  // Transcript toggler
  //
  $('.transcript').on('click', '.toggle', function(e) {
    var toggle = $(this),
        body   = toggle.siblings('.transcript_body');

    if (body.length === 0) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    body.stop();

    var currentHeight = body.height();

    if (currentHeight <= 0) {
      toggle.addClass('toggled');
      body.css({ height: 'auto' });
      var realHeight = body.height();
      body.css({ height: '0px' });
      var t = Math.max(500, (realHeight - currentHeight) / 4);
      body.animate({ height: realHeight + 'px' }, t);
    } else {
      toggle.removeClass('toggled');
      var t = Math.min(500, (currentHeight) / 4);
      body.animate({ height: '0px' }, t);
    }
  });

  // Tabs
  //
  $('.tabs').on('click', 'a', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    var a      = $(this),
        li     = a.closest('li'),
        tabs   = $('.tabs li'),
        sheets = $('.infographic'),
        sheet  = $(a.attr('href'));

    tabs.removeClass('active');
    li.addClass('active');
    sheets.hide();
    sheet.show();
  });

});

