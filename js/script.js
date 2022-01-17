$(document).ready(function () {
  $(".design").click(function (event) {
    $("#description-design").toggle();
  });
  $(".dev").click(function (event) {
    $("#description-dev").toggle();
  });
  $(".product").click(function (event) {
    $("#description-product").toggle();
  });
});

$(document).ready(function () {
  $("#port1").hover(function () {
    $("#overlay1").toggle();
  });
});

$(document).ready(function () {
  $("#port2").hover(function () {
    $("#overlay2").toggle();
  });
});

$(document).ready(function () {
  $("#port3").hover(function () {
    $("#overlay3").toggle();
  });
});

$(document).ready(function () {
  $("#port4").hover(function () {
    $("#overlay4").toggle();
  });
});

$(document).ready(function () {
  $("#port5").hover(function () {
    $("#overlay5").toggle();
  });
});

$(document).ready(function () {
  $("#port6").hover(function () {
    $("#overlay6").toggle();
  });
});

$(document).ready(function () {
  $("#port7").hover(function () {
    $("#overlay7").toggle();
  });
});

$(document).ready(function () {
  $("#port8").hover(function () {
    $("#overlay8").toggle();
  });
});

$(document).ready(function () {
  $("button").click(function (event) {
    var name = $("input#yourName").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    switch (name && email && message) {
      case "":
        alert("please input all details; name, email and message");
        break;
      default:
        alert(
          name + ", your message was recorded, we'll reply as soon as possible"
        );
    }
  });
});
