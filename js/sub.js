$(document).ready(function(){

  AOS.init();

  $(".quality li").eq(0).addClass("active");

  $(".quality li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
});