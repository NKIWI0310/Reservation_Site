$(function () {
  $("#calendar").datepicker({
    showOn: "both", // showOn 속성을 "both"로 설정
    buttonImage: "./images/v9_176.png",
    buttonImageOnly: true, // buttonImageOnly를 true로 설정하면 아이콘만 보임
  });

  $(".ui-datepicker-trigger").insertAfter("#calendar");
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

  $(".v9_174").text(`${selectedDate}/${personCount}`);
}
