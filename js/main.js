$(".fas").click(function(){
    $(".nav-item").slideToggle(1000);
    
})

/* button aware firection hover */
$(function() {
    $(document).on('mouseenter mouseleave', '.aware-button', function(event) {
  
      var w = $(this).outerWidth();
      var h = $(this).outerHeight();
      // Calculate the x and y to get an angle to the center of the div from that x and y.
      var x = (event.pageX - $(this).offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
      var y = (event.pageY - $(this).offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );
      // Calculate from where the mouse cursor enters
      var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
  
      // Check for direction
      switch(direction) {
        case 0:
        // direction top
        var cssClass = 'top';
        break;
        case 1: //
        // direction right
        var cssClass = 'right';
        break;
        case 2:
        // direction bottom
        var cssClass = 'bottom';
        break;
        case 3:
        // direction left
        var cssClass = 'left';
        break;
      }
  
      if( event.type === 'mouseenter' ) {
        var element = $(this);
        element.addClass(cssClass);
  
      } else {
        var element = $(this),
            cssClass = ('top right bottom left');
        element.removeClass(cssClass);
      }
    });
    $('.aware-button').on('click', function(e) {
      e.preventDefault();
    });
  });

/* button aware firection hover --end */

/* numbers counter plugin triger  */
var a = 0;
$(window).scroll(function() {

  var oTop = $('.record').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

/* numbers counter plugin triger --end */

/* owl carousel plugin triger  */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:25,
        loop:true,
        dotsEach:true,
        autoplay:true,
    });
  });
/* owl carousel plugin triger --end */

/* back to top button */
 $(window).scroll(function(){
    var scrlTop = $(window).scrollTop();
    if (scrlTop > 500){
        $(".back-top button").fadeIn(1000);
    }
    else{
       $(".back-top button").fadeOut(1000);
    }
    
 })
 $(".back-top button").click(function(){
    $("html, body").animate({scrollTop:"0"}, 1000 )
})
/* back to top button  --end */

/*  nav bar */
$(window).scroll(function(){
    var scrlTop = $(window).scrollTop();
    if (scrlTop > 200){
        $(".navbar").attr("class","py-0 my-0 navbar navbar-expand-sm navbar-light fixed-top");
    }
    else{
        $(".navbar").attr("class","py-2 navbar navbar-expand-sm navbar-light ");
    }
    
 })

 /* $("a[href='#home']").click(function(){
     var d = $(".home").offset().top ;
     $("body , html").animate({scrollTop:d}, 1000)
 })
 $("a[href='#about']").click(function(){
    var d = $(".about").offset().top ;
    $("body , html").animate({scrollTop:d}, 1000)
})
$("a[href='#services']").click(function(){
    var d = $(".service").offset().top ;
    $("body , html").animate({scrollTop:d}, 1000)
})
$("a[href='#portfolio']").click(function(){
    var d = $(".portfolio").offset().top ;
    $("body , html").animate({scrollTop:d}, 1000)
})
$("a[href='#testimonials']").click(function(){
    var d = $(".testimonials").offset().top ;
    $("body , html").animate({scrollTop:d}, 1000)
})
$("a[href='#contact']").click(function(){
    var d = $(".contact").offset().top ;
    $("body , html").animate({scrollTop:d}, 1000)
}) */
$("a").click(function(){
    $(this).parent().siblings().children().css("color","#828282 ")
    $(this).css("color","#5658DB")
    var aHref = $(this).attr("href");
    var d = $(aHref).offset().top;
    $("body, html").animate({scrollTop:d}, 1000)
})

new WOW().init({
    
});