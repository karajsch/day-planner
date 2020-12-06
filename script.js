let now = moment();

//var currentDay = document.getElementById("currentDay");

//currentDay.innerHTML = now.format("dddd, MMMM Do YYYY");

$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
});

$(document).ready(function () {
  clockUpdate();
  setInterval(clockUpdate, 1000);
});

function clockUpdate() {
  var date = new Date();
  $(".digital-clock").css({ color: "#000" });
  function addZero(x) {
    if (x < 10) {
      return (x = "0" + x);
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return (x = x - 12);
    } else if (x == 0) {
      return (x = 12);
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $(".digital-clock").text("It's " + h + ":" + m + ":" + s + " on ");
}

function setItem() {
  var userContent = document.getElementById("userNotes").nodeValue;
  localStorage.setItem("userContent", userContent);
}
