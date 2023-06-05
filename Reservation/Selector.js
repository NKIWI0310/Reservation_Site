$(function () {
  $("#datetimepicker").datetimepicker({
    format: "Y-m-d H:i",
  });

  for (var i = 1; i <= 20; i++) {
    $("#personCount").append(new Option(i, i));
  }

  $("#personCount").on("change", function () {
    updateSelectedData();
  });
});

function updateSelectedData() {
  var selectedDate = $("#datetimepicker").val(),
    personCount = $("#personCount").val(),
    restaurantName = $(".restaurant-name").text();

  localStorage.setItem("selectedDate", selectedDate);
  localStorage.setItem("personCount", personCount);
  localStorage.setItem("restaurantName", restaurantName);
}

$(document).ready(function () {
  $(".reservation-button").on("click", function () {
    var selectedDate = localStorage.getItem("selectedDate");
    var personCount = localStorage.getItem("personCount");
    var restaurantName = localStorage.getItem("restaurantName");

    alert(
      "예약이 완료되었습니다!\n\n" +
        "식당 이름: " +
        restaurantName +
        "\n" +
        "예약일: " +
        selectedDate +
        "\n" +
        "인원 수: " +
        personCount
    );
  });
});
