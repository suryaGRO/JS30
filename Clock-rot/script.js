const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec/60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = ((min/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getMinutes();
    const hourDeg = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);