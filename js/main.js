function letterFadeIn() {

  let $headerTitle = $('.header h1');
  let titleArray = $headerTitle.text().split('').map(function(x) {return '<span class="dropFadeIn">' + x + '</span>'});
  $headerTitle.html(titleArray.join(''));

  let n = 0;
  let interval = setInterval(function(){
      $headerTitle.find('span:nth-of-type(' + n + ')').css({
        animation: 'dropFromTop .5s .5s forwards'
      });
      n++;
      if(n === 39){
        clearInterval(interval);
        $headerTitle.addClass('underline');
      }
    },100);
}
$(document).ready(letterFadeIn);

$(document).ready(function(){
  $('#captions').slick({
    arrows: false,
    asNavFor: '.sync'
  });
  $('#images').slick({
    arrows: true,
    asNavFor: '.sync',
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
});

$(document).ready(function(){
  $('#print').click(function(){
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('#webgallery').removeClass('move-in').addClass('move-out');
    $('#gallery').removeClass('move-out').addClass('move-in');
  });
  $('#web').click(function(){
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('#webgallery').removeClass('move-out').addClass('move-in');
    $('#gallery').removeClass('move-in').addClass('move-out');
  });
});
