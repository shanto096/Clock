const hours = document. querySelector('.hour')
const minutes = document. querySelector('.minute')
const seconds = document. querySelector('.second')


function updateClock() {
 const currentTime = new Date();
//  setTimeout(updateClock,1000)
 const hour = currentTime.getHours();
 const minute = currentTime.getMinutes();
 const second = currentTime.getSeconds();
 const hourDeg = (hour / 12)* 360;
 hours.style.transform = `rotate(${hourDeg}deg)`;
 const minuteDeg = (minute / 60)* 360;
 minutes.style.transform = `rotate(${minuteDeg}deg)`;
 const secondDeg = (second / 60)* 360;
 seconds.style.transform = `rotate(${secondDeg}deg)`;   
}
setInterval(updateClock, 1000);