function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}
function getHours(s) {
  s %= 86400; // segundos en 24 horas
  return ((360 * s / 86400) + 180) % 360;
}

function getminutes(s) {
    s %= 3600; // segundos en una hora
    return ((6 * s / 60) + 180) % 360;
}
function getSecond(s) {
    s %= 60; // Segundos en un minuto
    return ((6 * s) + 180) % 360;
}

var minutes = document.getElementById("minutes");
var hours = document.getElementById("hour");
var second = document.getElementById("seconds");

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);
  // your code here
  hours.style.transform = `rotate(${getHours(time)}deg)`;
  minutes.style.transform = `rotate(${getminutes(time)}deg)`;
  second.style.transform = `rotate(${getSecond(time)}deg)`;
  second.style.transform = "rotate(121++deg)";
}, 1000);
