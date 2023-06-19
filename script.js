$(document).ready(function () {
  $(document).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".nav-container").css({
        position: "fixed",
        top: "0",
        width: "100%",
        left: "0",
        right: "0",
        borderRadius: "0",
      });
    } else {
      $(".nav-container").css({
        position: "absolute",
        top: "19%",
        width: "91%",
        left: "4%",
        right: "4%",
        borderRadius: "6px",
      });
    }
  });

  // change "header offer text" box style every change carousel slide
  if (
    $("#gift-landing-page-carousel").length > 0 &&
    $(".header-offer-text").length > 0
  ) {
    let landingHeaderCarouselEl = $("#gift-landing-page-carousel"),
      headerOfferText = $(".header-offer-text");

    // this event run after event change slide completed
    landingHeaderCarouselEl.on("slid.bs.carousel", function () {
      let getContentStyle = landingHeaderCarouselEl
        .find(".carousel-item.active")
        .data("content-style");
      headerOfferText.attr("data-content-style", getContentStyle);
    });

    // run bootstrap carousel event after loaded document
    landingHeaderCarouselEl.trigger("slid.bs.carousel");
  }
  if ($(window).width() < 576) {
    //hide all tabs first
    $(".tab-pane").hide();
    //show the first tab content
    $("#seo").show();
    $("#select-box").change(function () {
      dropdown = $("#select-box").val();
      //first hide all tabs again when a new option is selected
      $(".tab-pane").hide();
      //then show the tab content of whatever option value was selected
      $("#" + dropdown).show();
      $("#" + dropdown).addClass("active show");
    });
  } else {
    $("#seo").show();
  }
});
