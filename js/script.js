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
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#cart").click(function () {
    event.preventDefault();
    var cruTypes = $("#cru-types option:selected").val();
    var pizzaSizes = $("#pizzaSizes option:selected").val();
    var toppings = $("#Mushrooms").is(":checked");
    $("table tbody").append(
      "<tr class = 'clearOrders'><td>" +
        cruTypes +
        "</td><td>" +
        pizzaSizes +
        "</td><td>" +
        toppings +
        "</td></tr>"
    );
    $(".test").append(cruTypes);
    $("#checkoutButton").show();
    $("#return").show();
  });
  $("#return").click(function () {
    $("#formCart").show();
    $("#return").hide();
    $("#checkoutButton").hide();
    $(".clearOrders").remove();
  });
  $("#checkoutButton").click(function () {
    $("#formCart").toggle(".is-hidden");
  });
});
