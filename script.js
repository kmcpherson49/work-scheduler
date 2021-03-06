$(document).ready(function() {
    $(".rowBtn").on("click", function(){
        var inputValue = $(this).parent().find("input").val();
        var inputTime = $(this).parent().attr("id");
        localStorage.setItem(inputValue, inputTime);
    console.log(inputValue);
    console.log(inputTime);
    })

    var currentDate = moment().format("MM/DD/YYYY");
    $("#theDate").append(currentDate);
    



































})