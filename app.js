// curating dom elements
let dDays = document.getElementById("days");

let dHours = document.getElementById("hours");

let dMinutes = document.getElementById("minutes");

let dSeconds = document.getElementById("seconds");


let dateToReach = new Date('feb 8,2021 00:00:00');

const countDown=()=>{
    let today = new Date();
    let dateDiff = today - dateToReach ;
    
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor((dateDiff / days));
    let h = Math.floor( (dateDiff % days)/ hours);
    let m = Math.floor( (dateDiff % hours)/ minutes);
    let s = Math.floor( (dateDiff % minutes)/ seconds);
   
    dDays.innerHTML = d * -1;
    dHours.innerHTML = h * -1;
    dMinutes.innerHTML = m * -1;
    dSeconds.innerHTML = s * -1;

    if(d* -1 < 0 && h* -1 < 0  && m* -1 < 0 && s* -1 < 0){
        clearInterval(startCountDown);
    }
}

let startCountDown = setInterval(countDown, 1000);
