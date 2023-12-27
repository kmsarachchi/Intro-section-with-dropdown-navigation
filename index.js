$(document).ready(function () {
  $(".close-icon").click(function () {
    $(".mobile-overlay").hide();
    $(".navbar").removeClass("dark");
    $(".main").removeClass("dark");
  });
  $(".menu-icon").click(function () {
    $(".mobile-overlay").show();
    $(".navbar").addClass("dark");
    $(".main").addClass("dark");
  });

  $(".dropdown-header").click(function () {
    $(this).next(".dropdown-content").toggleClass("show");
    var img = $(this).find("img"); // Find the img tag inside .dropdown-header
    var imgSrc = img.attr("src");

    if (imgSrc === "./images/icon-arrow-down.svg") {
      imgSrc = "./images/icon-arrow-up.svg";
    } else {
      imgSrc = "./images/icon-arrow-down.svg";
    }
    img.attr("src", imgSrc); // Set the updated image source
  });
});
