setInterval(function () {
  var date = new Date ()
  var hr = date.getHours()
  var mm = date.getMinutes()
  var sec = date.getSeconds()


  if (hr < 13){
    console.log ("Good Morning Sunshine");
  }else {
    console.log ("Good Night");
  }

  var greet = document.querySelector(".greet")
  greet.innerHTML  = ("Good Morning Sunshine")

  var close = document.querySelector(".close")
  close.innerHTML  = ("Good Night!")


  var hourElement = document.getElementById("hr")
  hourElement.innerHTML  = hr

  var minutesElement = document.getElementById("mm")
  minutesElement.innerHTML  = mm

  var secondsElement = document.getElementById("sec")
  secondsElement.innerHTML  = sec

}, 1000);

// body.getElementsById("mm")
// body.getElementsById("sec")


//this var is connecting html is telling js what
//note to self
//error - should - element.addEventListener
//didnt have have click

//  var hour = document.getElementById("hr");
//  .addEventListener("click",function() {
//  hour.innerText = hr;
//  var hour = document.getElementById("mm");
//  hour.innerText = mm;
//  var hour = document.getElementById("sec");
//  hour.innerText = sec;
//
