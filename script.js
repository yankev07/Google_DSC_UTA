  var vsOpts = {
    $slides: $('.v-slide'),
    $list: $('.v-slides'),
    duration: 6,
    lineHeight: 50
  }
  
  var vSlide = new TimelineMax({
    paused: true,
    repeat: -1
    // yoyo: true
  })
  
  vsOpts.$slides.each(function(i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
      y: i * -1 * vsOpts.lineHeight,
      // ease:Elastic.easeOut.config(1,0.8)
      ease: Power4.easeOut
    })
  })
  vSlide.play()

//   function get_action(form) {
//     form.action = "https://docs.google.com/forms/d/e/1FAIpQLSf5FpEwKQ3MhqBeQyJzAmTzjpjRfNEVrGV39Ith0we-JWgTzg/formResponse";
//     document.getElementById("form-box").reset();
// }


  function formSubmit() {
   // document.getElementById("form-box").action = "https://docs.google.com/forms/d/e/1FAIpQLSf5FpEwKQ3MhqBeQyJzAmTzjpjRfNEVrGV39Ith0we-JWgTzg/formResponse";
    document.getElementById("form-box").submit();
    document.getElementById("form-box").reset();
  }

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-toggler-icon').on("click", function(){
  $('#pushContent').slideToggle();
});