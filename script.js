$(document).ready(function () {
  //wrapping everything in the document ready function

  // Using Moment.js for time and date
  var today = moment().format("[It's ] hh:mm A [ on ] dddd, MMMM Do, YYYY");
  console.log(today)

  $("#currentDay").append(today);

  var now = parseInt(moment().format('HH'));
  console.log(now)
  // Making each hour it's own variable
  var $text9AM = $("#text9AM");
  var $text10AM = $("#text10AM");
  var $text11AM = $("#text11AM");
  var $text12AM = $("#text12PM");
  var $text1PM = $("#text1PM");
  var $text2PM = $("#text2PM");
  var $text3PM = $("#text3PM");
  var $text4PM = $("#text4PM");
  var $text5PM = $("#text5PM");

  // Color coding based on time of day and if it's past, present, or future
  $("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < now) {
      $(this).addClass("past");
    }

    if (name > now) {
      $(this).addClass("present")
    }

    if (name === now) {
      $(this).addClass("future")
    }



  })

  // Grabbing user submitted text and setting it to local storage
  $("button").on("click", function () {
    localStorage.setItem("9AM", ($text9AM.val()))
    localStorage.setItem("10AM", ($text10AM.val()))
    localStorage.setItem("11AM", ($text11AM.val()))
    localStorage.setItem("12AM", ($text12AM.val()))
    localStorage.setItem("13PM", ($text1PM.val()))
    localStorage.setItem("14PM", ($text2PM.val()))
    localStorage.setItem("15PM", ($text3PM.val()))
    localStorage.setItem("16PM", ($text4PM.val()))
    localStorage.setItem("17PM", ($text5PM.val()))

  })

  // Getting user text from local storage and appending it to user's computer 
  $("#text9AM").append(localStorage.getItem("9AM"));
  $("#text10AM").append(localStorage.getItem("10AM"));
  $("#text11AM").append(localStorage.getItem("11AM"));
  $("#text12AM").append(localStorage.getItem("12AM"));
  $("#text1PM").append(localStorage.getItem("13PM"));
  $("#text2PM").append(localStorage.getItem("14PM"));
  $("#text3PM").append(localStorage.getItem("15PM"));
  $("#text4PM").append(localStorage.getItem("16PM"));
  $("#text5PM").append(localStorage.getItem("17PM"));

})