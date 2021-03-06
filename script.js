var inputValue;
var inputTime;
//var loadTasks;

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        inputValue = $(this).parent().find("input").val();
        inputTime = $(this).parent().attr("id");
        localStorage.setItem(inputTime, inputValue);

        console.log(inputValue);
        console.log(inputTime);
        console.log(localStorage);
    });

    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#theDate").append(currentDate);

    var loadTasks = function () {
        var storedData9am = localStorage.getItem("9am")
        $("#9").val(storedData9am);

        var storedData10am = localStorage.getItem("10am")
        $("#10").val(storedData10am);

        var storedData11am = localStorage.getItem("11am")
        $("#11").val(storedData11am);

        var storedData12pm = localStorage.getItem("12pm")
        $("#12").val(storedData12pm);

        var storedData1pm = localStorage.getItem("1pm")
        $("#13").val(storedData1pm);

        var storedData1pm = localStorage.getItem("2pm")
        $("#14").val(storedData1pm);

        var storedData3pm = localStorage.getItem("3pm")
        $("#15").val(storedData3pm);

        var storedData4pm = localStorage.getItem("4pm")
        $("#16").val(storedData4pm);

        var storedData5pm = localStorage.getItem("5pm")
        $("#17").val(storedData5pm);
    };

    // load tasks for the first time
    loadTasks();

    // var currentTime = moment().format("h:mm:ss a");
    // console.log(currentTime);

    var currentTime = moment().format("H");
    console.log(currentTime);

    //variable to compare time in simplier form
    //loop through input id with if else inside
    //let elTime;

    for (let i = 9; i < 18; i++) {
        console.log(i);
        //console.log(elTime);
        if (i == currentTime) {
        $(`#${i}`).addClass("present");
    } if (i < currentTime) {
        $(`#${i}`).addClass("past");
     } 
    if (i > currentTime) {
         $(`#${i}`).addClass("future");
    };
    }

    // $(".col-10").addClass("future");
    // // if id=time is past present or future change color
    

});


