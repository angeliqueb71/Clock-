///digital time
window.onload = setInterval(clock,1000);

    function clock() {
    // setting the date
	  var d = new Date();
	  var date = d.getDate();

	  var month = d.getMonth();
	  var montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
	  month=montharr[month];

	  var year = d.getFullYear();

	  var day = d.getDay();
	  var dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
	  day=dayarr[day];

    ///seting the time
    var d = new Date();
    var t = d.toLocaleTimeString();

	  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
	  document.getElementById("clock").innerHTML = t;
    }


    //changing color for every second
    var myVar = setInterval(function(){ setColor() }, 1000);

    function setColor() {
      var x = document.body;
      x.style.backgroundColor = x.style.backgroundColor == "gray" ? "black" : "gray";
    }

    function stopColor() {
      clearInterval(myVar);
    }
