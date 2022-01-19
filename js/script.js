$(document).ready(function () {
  $("#img1").hover(function () {
    $(".crispy-crust").toggle();
  });
  $("#img2").hover(function () {
    $(".stuffed-crust").toggle();
  });
  $("#img3").hover(function () {
    $(".gluttenFree-crust").toggle();
  });
  $("#img4").hover(function () {
    $(".cracker-crust").toggle();
  });
  Event.preventDefault();
});

$(document).ready(function () {
  $("button").click(function summary(crust, size, toppings) {
    event.preventDefault();
  });
});
