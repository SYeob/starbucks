let num = 0;

$(document).ready(function () {
  // $(document).scroll(function () {
  //   var height = $(document).scrollTop();
  //   console.log(height);
  // });
  // 메뉴바 수정중
  $('.background_menu').hide();
  $(".navbar li").on({
    mouseover: function () {
      $(this).find('.background_menu').stop().slideDown(300);

    },
    mouseout: function() {
      $(this).find('.background_menu').stop().slideUp(300);
    }
  });
  // 메인 음료
  setInterval(() => {
    $(".drink_01").fadeIn();
  }, 1000);
  setInterval(() => {
    $(".drink_02").fadeIn();
  }, 1500);
  setInterval(() => {
    $(".drink_03").fadeIn();
  }, 2000);
  setInterval(() => {
    $(".drink_04").fadeIn();
  }, 2500);

  // 공지사항
  let currentIndex = 0;
  $(".notice_list li:gt(0)").hide();
  setInterval(() => {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    // console.log(currentIndex);
    $(".notice_list li").eq(currentIndex).slideDown(500);
    $(".notice_list li")
      .eq(currentIndex - 1)
      .hide(500);
  }, 2000);

  // 프로모션
  $("#promotion").on("click", function () {
    num++;
    if (num % 2 == 1) {
      $("#starbucks_promotion").slideDown();
      $("#promotion > img").attr("src", "../asset/btn_prom_up.png");
      $(".btn_egift").css("margin-top", "660px");
    } else {
      $("#starbucks_promotion").slideUp();
      $("#promotion > img").attr("src", "../asset/btn_prom_Down.png");
      $(".btn_egift").css("margin-top", "0px");
    }
  });
  //   커피빈
  $(window).scroll(function () {
    var scrollValue = $(document).scrollTop();
    console.log(scrollValue);

    if (scrollValue > 160) {
      $(".bean_img_box").css("left", "11%");
      $(".bean_text_box").css("right", "8%");

      if (scrollValue > 644) {
        $("#christmas_event").css("opacity", "1");
      }
      if (scrollValue > 1100) {
        $(".fav_prod_txt01").css({ opacity: "1", left: "200px" });
        $(".fav_prod_txt02").css({ opacity: "1", left: "92px" });
      }
      if (scrollValue > 1811) {
        $(".store_txt01").css({ opacity: "1", right: "149px" });
        $(".store_txt02").css({ opacity: "1", right: "168px" });
        $("#store_btn").css({ opacity: "1", right: "402px" });
      }
    } else {
      $(".bean_img_box").css("left", "-31%");
      $(".bean_text_box").css("right", "-28%");
      $("#christmas_event").css("opacity", "0.1");
      $(".fav_prod_txt01").css({ opacity: "0.3", left: "-200px" });
      $(".fav_prod_txt02").css({ opacity: "0.3", left: "-192px" });
 
      $(".store_txt01").css({ opacity: "0.3", right: "-100px" });
      $(".store_txt02").css({ opacity: "0.3", right: "-168px" });
      $("#store_btn").css({ opacity: "0.3", right: "-202px" });
    }
  });
});
