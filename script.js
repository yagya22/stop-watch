let timer;
let hour=0;
let minute=0;
let second=0;

function startStopwatch(){
    timer=setInterval(updateStopwatch(),1000);
}
function stopStopwatch(){
    clearInterval(timer);
}
function resetStopwatch(){
    clearInterval(timer);
    hour=0;
    minute=0;
    second=0;
    updateStopwatch();
}
function updateStopwatch(){
    second++;
    if(second==60){
        second=0;
        minute++;
        if(hour==60){
        minute=0;
        hour++;
        }
    }
    document.getElementById("hour").innerText=pad(hour)+ ":";
    document.getElementById("hour").innerText=pad(minute)+ ":";
    document.getElementById("hour").innerText=pad(second);

}
function pad(value){
    return value < 10 ? "0" + value : value;
}
