$(document).ready(function () {
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
