$(document).ready(function () {
  $(".news__card img").each(function () {
    var imgHeight = $(this).height();
    if (imgHeight < 150) {
      $(this).closest(".news__card").remove();
    } else {
      $(this).height(200);
    }
  });
});