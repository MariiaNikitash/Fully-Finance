// Event: Submit
$(document).ready(function () {
  $("#myButton").on("click", function (event) {
    event.preventDefault(); //Prevents reload

    // Calculate amount remaining
    var remaining = calcRemaining();

    // Grab year on slider
    var year_on_slider = parseInt($("#YearCount").html());

    // Calculate principal value
    var principal_val = remaining * year_on_slider * 12;
    $("#principal_val").html(numberWithCommas(principal_val));

    // Calculate interest
    fv = calcFV(remaining, year_on_slider);
    fv = parseInt(fv.replace(/,/g, ""));
    $("#interest_val").html(numberWithCommas(fv - principal_val));

    // Calculate future value
  });
});

// Event: Slider move
$(".YearSlider").on("input", function (event) {
  event.preventDefault(); //Prevents reload

  // Grab year on slider
  var year_on_slider = $(this).val();
  // Set html attributes so site can display current year_on_slider
  $("#YearCount").html(year_on_slider);
  $("#YearCount2").html(year_on_slider);
  $("#YearCount3").html(year_on_slider);

  // Get remaining amount (str)(with commas) from html attribute
  var remaining = $("#remaining").html();

  // Remove commas and make int
  remaining = parseInt(remaining.replace(/,/g, ""));

  // Calculate principal value
  var principal_val = remaining * year_on_slider * 12;
  $("#principal_val").html(numberWithCommas(principal_val));

  // Calculate interest
  fv = calcFV(remaining, year_on_slider);
  fv = parseInt(fv.replace(/,/g, ""));
  $("#interest_val").html(numberWithCommas(fv - principal_val));

  // Calculate future value

});

function calcRemaining() {
  // Returns: (int) remaining

  // Grab values from input boxes
  var income = parseInt($("#income").val());
  var rent = parseInt($("#rent").val());
  var transportation = parseInt($("#transportation").val());
  var utilities = parseInt($("#utilities").val());
  var food = parseInt($("#food").val());
  var healthcare = parseInt($("#healthcare").val());
  var debt = parseInt($("#debt").val());
  var personal = parseInt($("#personal").val());
  var remaining =
    income -
    (rent + transportation + utilities + food + healthcare + debt + personal);

  // Save the remaining amount as int (before comma separators are added)
  var remaining_without_commas = remaining;

  // Insert commas separators
  remaining = numberWithCommas(remaining);

  // Set html attribute to display remaining (format: xxx,xxx,xxx)
  $("#remaining").html(remaining);

  // Return remaining balance as int
  return remaining_without_commas;
}

function calcFV(remaining, t) {
  // Returns: None
  // t        : Year on slider
  // remaining: Remaining money

  var contribution = remaining * 12;
  var fv = (contribution * (Math.pow(1.1, t) - 1)) / 0.1;

  // Format fv: Add commas and specify precision
  fv = fv.toFixed(0);
  fv = numberWithCommas(fv);

  // Set html attribute for display
  $("#future_val").html(fv);
  return fv;
}

function numberWithCommas(x) {
  // Takes int and inserts comma separators
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
