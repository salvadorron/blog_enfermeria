  $('.container').on('click', 'h4', function(){
  var t = $(this);
  var tp = t.next();
  var p = t.parent().siblings().children().next();
  tp.slideToggle();
  p.slideUp();
});