let button_ui = Array.from(document.querySelectorAll("Button"));
let timer_ui = document.getElementById("timer");
let start_ui=button_ui[0],
pause_ui=button_ui[1],
stop_ui=button_ui[3];
let int;
let [hour,minute,sec,msec]=[0,0,0,0]; // Array deconstruction

// Start when we click Start button
function displayTimer(){
    msec+=10;
    if(msec==1000){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            minute++;
            if(minute==60){
                minute=0;
                hour++;
            }
        }
    }
    let h =hour<10?"0"+hour:hour;
    let m=minute<10?"0"+minute:minute;
    let s=sec<10?"0"+sec:sec;
    let ms=msec<10?"00"+msec:msec<100?"0"+msec:msec;
    timer_ui.innerText=`${h} : ${m} : ${s} : ${ms}`;
}

stop_ui.addEventListener('click',()=>{
    clearInterval(int);
    [hour,minute,sec,msec]=[0,0,0,0];
    timer_ui.innerText=`00 : 00 : 00 : 000`;
})
pause_ui.addEventListener('click',()=>{
    clearInterval(int);
})
start_ui.addEventListener('click',()=>{
    int=setInterval(displayTimer,10);
})