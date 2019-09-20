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
