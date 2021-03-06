var inputValue = {};
var inputTime = {};

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    inputValue = $(this).parent().find("input").val();
    inputTime = $(this).parent().attr("id");
    localStorage.setItem(inputValue, inputTime);

    console.log(inputValue);
    console.log(inputTime);
  });

  var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#theDate").append(currentDate);

    //retireve localstorage
    localStorage.getItem(
    "inputValue",
    "inputTime"
  );

  var loadTasks = function () {
    inputTime = localStorage.getItem(inputTime);
    inputValue = localStorage.getItem(inputValue);




};

// load tasks for the first time
loadTasks();