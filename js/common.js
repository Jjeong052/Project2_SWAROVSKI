$(document).ready(function(){

  //popup창
  $(".popup-close").click(function(){
    $(".popup").slideUp();
  });

  //depth2
  $(".depth2").hide();

  $(".gnb > li").hover(function(){
    $(this).find(".depth2").stop().slideToggle();
  });

  //검색창
  $(".search-box").hide();

  $(".search-btn").click(function(){
    $(".search-box").slideToggle();
  });

  $(".search-close").click(function(){
    $(".search-box").slideUp();
  });

});