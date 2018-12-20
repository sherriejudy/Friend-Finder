$("#submit").on("click", function (event) {
  event.preventDefault();

  var questArray = [
    parseInt($("#quest1").val().trim()),
    parseInt($("#quest2").val().trim()),
    parseInt($("#quest3").val().trim()),
    parseInt($("#quest4").val().trim()),
    parseInt($("#quest5").val().trim()),
    parseInt($("#quest6").val().trim()),
    parseInt($("#quest7").val().trim()),
    parseInt($("#quest8").val().trim()),
    parseInt($("#quest9").val().trim()),
    parseInt($("#quest10").val().trim())
  ]

  var userInput = {
    name: $("#name").val().trim(),
    photo: $("#pic").val().trim(),
    scores: questArray
  };
  console.log("post");
  console.log(userInput);
  // $.post("/api/friends", userInput, function (data) {
  //   console.log(data);
  // });

  $.ajax({
    url: "/api/friends",
    type: "POST",
    data: JSON.stringify(userInput),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  }).done(function (data) {
    console.log(data);
    // Display the matched person
    $('#modalName').text(data.name)
    $('#modalImage').attr("src", data.photo)
    $('#myModal').modal("show")
  });
});

