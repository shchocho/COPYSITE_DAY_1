$(function(){

  $(".gvn-btn").click(function(){
    if($(this).hasClass("data")){
      $(".gvn-btn").removeClass("on");
      $(this).addClass("on");
      // $(".gvn-tbl").removeClass("active");
      // $(".data").addClass("active");
    }else if($(this).hasClass("onchain")){
      $(".gvn-btn").removeClass("on");
      $(this).addClass("on");
      // $(".gvn-tbl").removeClass("active");
      // $(".onchain").addClass("active");
    }
  })
})
