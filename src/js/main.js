$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  console.log(wScroll);

  // $(".parallax-back").css("background-position", "center "+(wScroll*0.5)+"px");

  $(".parallax_card--fg").css("top", (wScroll*0.01)+"px");
  $(".parallax_card--bg").css("top", (-(0.75*h)+1+wScroll*0.75)+"px");
}
