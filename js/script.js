$(document).ready(function() {
   $('#nav').affix({
        offset: {
          top: $('header').height()
        }});
});

function height_carousel_mine () {
  var a = document.getElementById('one_slide_carousel').clientHeight;
  document.getElementById('two_slide_carousel').style.width=a;
  console.log("DONE 1");
  document.getElementById('three_slide_carousel').style.width=a;
  console.log("DONE 2");
}