$(function () {
  $("#datetimepicker").datetimepicker({
    format: "Y-m-d H:i",
  });

  $(".ui-datepicker-trigger").insertAfter("#datetimepicker3");
  for (var i = 1; i <= 20; i++) {
    $("#personCount").append(new Option(i, i));
  }

  $("#personCount").on("change", function () {
    updateSelectedData();
  });
});

function updateSelectedData(newDate) {
  var selectedDate = newDate || $("#calendar").datepicker("getDate"),
    personCount = $("#personCount").val();

  $("").text(`${selectedDate}/${personCount}`);
}
