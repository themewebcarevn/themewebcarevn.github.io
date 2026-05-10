(function ($) {
  "use strict";

  /*==== One Page Nav  ====*/
  var top_offset = $(".one_page").height() + 0;
  $(".one_page .psylogy_nav_area .nav_scroll").onePageNav({
    currentClass: "current",
    changeHash: false,
    scrollSpeed: 1000,
    scrollOffset: top_offset,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  $(".nav_scroll > li:first-child").addClass("current");

  /*==== sticky nav 1  ====*/
  $(".one_page").scrollToFixed({
    preFixed: function () {
      $(this).find(".scroll_fixed").addClass("prefix");
    },
    postFixed: function () {
      $(this).find(".scroll_fixed").addClass("postfix").removeClass("prefix");
    },
  });

  /*==== sticky nav 2  ====*/
  var headers1 = $(".trp_nav_area");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      headers1.addClass("hbg2");
    } else {
      headers1.removeClass("hbg2");
    }
  });

  /*==== Mobile Menu  ====*/
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "990",
    meanMenuContainer: ".mobile-menu",
    onePage: true,
  });

  /*==== Top quearys menu  ====*/
  var emsmenu = $(".em-quearys-menu i.t-quearys");
  var emscmenu = $(".em-quearys-menu i.t-close");
  var emsinner = $(".em-quearys-inner");
  emsmenu.on("click", function () {
    emsinner.addClass("em-s-open");
    $(this).addClass("em-s-hiddens");
    emscmenu.removeClass("em-s-hidden");
  });
  emscmenu.on("click", function () {
    emsinner.removeClass("em-s-open");
    $(this).addClass("em-s-hidden");
    emsmenu.removeClass("em-s-hidden");
  });

  /*==== popup mobile menu  ====*/

  var mrightma = $(".mobile_menu_o i.openclass");
  var mrightmi = $(".mobile_menu_o i.closeclass");
  var mrightmir = $(".mobile_menu_inner");
  var mobile_ov = $(".mobile_overlay");
  mrightma.on("click", function () {
    mrightmir.addClass("tx-s-open");
    mobile_ov.addClass("mactive");
  });
  mrightmi.on("click", function () {
    mrightmir.removeClass("tx-s-open");
    mobile_ov.removeClass("mactive");
  });

  /*==== swiper active  ====*/

  new Swiper(".swiper_active", {
    effect: "defult",
    grabCursor: false,
    speed: 2000,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: false,
    mousewheel: false,
    keyboard: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".scrollbar_false",
      hide: true,
    },
  });

  /*==== ds slider js   ====*/

  var witrbsslick = $(".witr_cslide_idany");

  if (witrbsslick.length > 0) {
    witrbsslick.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 2000,
      default: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /*==== WOW active js   ====*/
  new WOW().init();

  /*==== scrollUp  ====*/
  $.scrollUp({
    scrollText: '<i class="icofont-thin-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /*==== Venubox  ====*/
  $(".venobox").venobox({
    numeratio: true,
    infinigall: true,
  });

  var witrbslick = $(".team_slider");
  if (witrbslick.length > 0) {
    witrbslick.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: false,
      centerPadding: "",
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var witrbslick = $(".blogcar_id1");
  if (witrbslick.length > 0) {
    witrbslick.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  /*==== team js  ====*/

  // Project Slider

  var witrbslick = $(".witr_cslide_idans");
  if (witrbslick.length > 0) {
    witrbslick.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Company Area

  var witrbslick = $(".company-slick");

  if (witrbslick.length > 0) {
    witrbslick.slick({
      infinite: true,
      autoplay: true,
      default: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Testimonials Area Start

  var witrbtslick = $(".testi_slider");
  if (witrbtslick.length > 0) {
    witrbtslick.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }


  jQuery(function ($) {
    if ($(".witr_testiSlider").length > 0) {
      $(".witr_testiSlider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".wirt_TraSlider",
        autoplay: true,
      });

      $(".wirt_TraSlider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".witr_testiSlider",
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
        speed: 700,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  });

  /*==== blog sidebar active ====*/
  $(".blogcar_idblog1").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "",
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Related Product Area

  $(".wp_related").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /*==== portfolio isotop ====*/

  $(".portfolio_active").imagesLoaded(function () {
    if ($.fn.isotope) {
      var $portfolio = $(".portfolio_active");

      $portfolio.isotope({
        itemSelector: ".eportfolio_item",

        filter: "*",

        resizesContainer: true,

        layoutMode: "masonry",

        transitionDuration: "0.8s",
      });

      $(".filter_menu li").on("click", function () {
        $(".filter_menu li").removeClass("current_menu_item");

        $(this).addClass("current_menu_item");

        var selector = $(this).attr("data-filter");

        $portfolio.isotope({
          filter: selector,
        });
      });
    }
  });

  /*==== Mouse Direction Hover Iffect ====*/

  $(".single_protfolio").directionalHover();
  $(".single_protfolio").directionalHover({
    // CSS class for the overlay
    overlay: "em_port_content",
    // Linear or swing
    easing: "swing",
    speed: 50,
  });

  /*==== Bootstrap Accordion  ====*/
  $(".faq-part .card").each(function () {
    var $this = $(this);
    $this.on("click", function (e) {
      var has = $this.hasClass("active");
      $(".faq-part .card").removeClass("active show");
      if (has) {
        $this.removeClass("active show");
      } else {
        $this.addClass("active show");
      }
    });
  });

  /*==== popup sideber menu  ====*/
  var rightma = $(".right_sideber_menu i.openclass");
  var rightmi = $(".right_sideber_menu i.closeclass");
  var rightmir = $(".right_sideber_menu_inner");
  rightma.on("click", function () {
    rightmir.addClass("tx-s-open");
  });
  rightmi.on("click", function () {
    rightmir.removeClass("tx-s-open");
  });

  var mrightma = $(".mobile_menu_o i.openclass");
  var mrightmi = $(".mobile_menu_o i.closeclass");
  var mrightmir = $(".mobile_menu_inner");
  var mobile_ov = $(".mobile_overlay");
  mrightma.on("click", function () {
    mrightmir.addClass("tx-s-open");
    mobile_ov.addClass("mactive");
  });
  mrightmi.on("click", function () {
    mrightmir.removeClass("tx-s-open");
    mobile_ov.removeClass("mactive");
  });

  /*==== counter active ====*/

  $(".counter").counterUp({
    delay: 20,
    time: 3000,
  });
})(jQuery);
