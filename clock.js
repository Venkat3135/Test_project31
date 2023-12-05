const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");


function updateClock() {
    const now = new Date;
    // setTimeout(updateClock,1000)
    // console.log(currentDate)
    setTimeout(updateClock, 1000)
    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();
  
    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;
  
    secondEl.style.transform = `rotate(${secondDegree}deg)`;
    minuteEl.style.transform = `rotate(${minuteDegree}deg)`;
    hourEl.style.transform = `rotate(${hourDegree}deg)`;

}

 setInterval(updateClock , 1000) 
 