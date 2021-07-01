$(document).ready(function () {
  $("#btnOk").click(function () {
    $.ajax({
      url:
        "https://restcountries.eu/rest/v2/callingcode/" +
        $("#txtCallingCode").val(),
      success: function (responce) {
        console.log(responce);
        console.log(responce[0].flag);

        // $("#lblName").attr("value", responce[0].name);
        $("#lblName").text(responce[0].name);
        $("#lblCapital").text(responce[0].capital);

        $("#imgFlag").attr("data", responce[0].flag);
        $("#imgFlag").attr({ width: 200, height: 200 });
        $("#btnOk").attr({ value: "Done" });
      },
      error: function (responce) {
        alert("Error !");
      },
    });
  });

  $("#btnClear").click(function () {
    $("#txtCallingCode").val("");
    $("#lblName").text("");
    $("#lblCapital").text("");
    // $("#imgFlag").attr("data", null);
  });
});
