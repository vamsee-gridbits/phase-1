$(document).ready(function() {
   $('#nav').affix({
        offset: {
          top: $('header').height()
        }});
});

function height_carousel_mine () {
  var a = document.getElementById('one_slide_carousel').clientHeight;
  document.getElementById('two_slide_carousel').style.width=a + "px";
  console.log(a);
  document.getElementById('three_slide_carousel').style.width=a +"px";
  console.log("DONE 2");
}

function test(){
    var scrollAmount = $(window).scrollTop();
    console.log(scrollAmount);;
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return ly;
}
document.getScroll= function(){
 if(window.pageYOffset!= undefined){
  return pageYOffset;
 }
 else{
  var sx, sy, d= document, r= d.documentElement, b= d.body;
  sx= r.scrollLeft || b.scrollLeft || 0;
  sy= r.scrollTop || b.scrollTop || 0;
  return sy;
 }
}

window.onscroll = function (event) {
  // called when the window is scrolled.
    var scrollPosition = document.getScroll();
    var pic_1 = getPos(pic1) - 200;
    var pic_2 = getPos(pic2) + 450;
    var pic_3 = getPos(pic3) + 700;
    var pic_4 = getPos(pic4) + 950;
    var pic_5 = getPos(pic5) + 1400;
    if (scrollPosition >= pic_1)
        document.getElementById('pic1').className = "img-responsive animated bounceInLeft";    
    if(scrollPosition >= pic_2)
        document.getElementById('pic2').className = "img-responsive animated bounceInRight";        
    if (scrollPosition >= pic_3)
        document.getElementById('pic3').className = "img-responsive animated bounceInLeft";    
    if(scrollPosition >= pic_4)
        document.getElementById('pic4').className = "img-responsive animated bounceInRight"; 
    if(scrollPosition >= pic_5)
        document.getElementById('pic5').className = "animated bounceInRight";         
    console.log(scrollPosition )//+ ", " + pic_1 + ", " + pic_2 + ", " + pic_3 + ", " + pic_4);
}

function fooba(){
    document.getElementById('bar1').beginElement();
    document.getElementById('bar2').beginElement();
    document.getElementById('bar3').beginElement();
    document.getElementById('bar4').beginElement();
    document.getElementById('bar5').beginElement();
}