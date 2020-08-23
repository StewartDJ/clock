const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
 
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
 minsHand.style.transform = `rotate(${minsDegrees}deg)`; 
  
  var hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
 hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
 
  
 var amOrPm = hour >= 12 ? 'PM' : 'AM';
 hour = hour % 12;

  
  var x = new Date(),
 printMins = x.getMinutes().toString().length == 1 ? '0'+x.getMinutes() : x.getMinutes()
 
 var y = new Date()
printSeconds = y.getSeconds().toString().length == 1 ? '0'+y.getSeconds() : y.getSeconds()

 var displayTime =  hour + ":" + printMins + ":" + printSeconds + " "  +amOrPm;
 document.getElementById("print").innerHTML = displayTime;
 
 
}

setInterval (setDate, 1000);

setDate();