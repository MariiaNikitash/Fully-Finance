$(document).ready(function () {
  $("#myButton").on("click", function (event) {
    event.preventDefault(); //prevents reload

    calcRemaining();

    calcFV();
  }); 

  $(".YearSlider").on("input", function (event) {
    event.preventDefault();

    var yrs = $(this).val();
    //console.log(yrs);

    $("#YearCount").html(yrs);
    //console.log(yrs);
    //console.log(parseInt($("#YearCount").html()));
    calcFV();
    var new_value = parseInt($("#future_val").html());
  });

  function calcRemaining() {
    var income = parseInt($("#income").val());
    var rent = parseInt($("#rent").val());
    var transportation = parseInt($("#transportation").val());
    var utilities = parseInt($("#utilities").val());
    var food = parseInt($("#food").val());
    var healthcare = parseInt($("#healthcare").val());
    var debt = parseInt($("#debt").val());
    var personal = parseInt($("#personal").val());
    var remaining =
      income - (rent + transportation + utilities + food + healthcare + debt + personal);
    remaining = numberWithCommas(remaining)
    $("#remaining").html(remaining);
  }

  function calcFV() {
    t = parseInt($("#YearCount").html());

    //console.log(t);

    var remaining = parseInt($("#remaining").html());
    var c = remaining * 12;
    var fv = (c * (Math.pow(1.1, t) - 1)) / 0.1;

    fv = fv.toFixed(0);
    fv = numberWithCommas(fv);
    console.log(fv)
    $("#future_val").html(fv);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
