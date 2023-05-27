function openNav(){
    document.getElementById("open").style.display = "none";
    document.getElementById("nav").style.width = "70%";
}

function closeNav(){
    document.getElementById("nav").style.width ="0";
    document.getElementById("open").style.display="block";
}

var x = document.getElementById("demo");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition, showError);
} else { 
x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
switch(error.code) {
case error.PERMISSION_DENIED:
  x.innerHTML = "User denied the request for Geolocation."
  break;
case error.POSITION_UNAVAILABLE:
  x.innerHTML = "Location information is unavailable."
  break;
case error.TIMEOUT:
  x.innerHTML = "The request to get user location timed out."
  break;
case error.UNKNOWN_ERROR:
  x.innerHTML = "An unknown error occurred."
  break;
}
}


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  
  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  function clickCounter1() {
if (typeof(Storage) !== "undefined") {
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount)+1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
}
}