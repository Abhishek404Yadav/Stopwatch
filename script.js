let button_ui = Array.from(document.querySelectorAll("Button"));
let timer_ui = document.getElementById("timer");
let record_ui = document.getElementById("record");
let start_ui = button_ui[0],
  pause_ui = button_ui[1],
  lap_ui = button_ui[2],
  stop_ui = button_ui[3];
let int;
let [hour, minute, sec, msec] = [0, 0, 0, 0]; // Array deconstruction
let [h, s, m, ms] = [0, 0, 0, 0];

// Start when we click Start button
function displayTimer() {
  msec += 10;
  if (msec == 1000) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      minute++;
      if (minute == 60) {
        minute = 0;
        hour++;
      }
    }
  }
  m = minute < 10 ? "0" + minute : minute;
  h = hour < 10 ? "0" + hour : hour;
  s = sec < 10 ? "0" + sec : sec;
  ms = msec < 10 ? "00" + msec : msec < 100 ? "0" + msec : msec;
  timer_ui.innerText = `${h} : ${m} : ${s} : ${ms}`;
}
stop_ui.addEventListener("click", () => {
    clearInterval(int);
    [hour, minute, sec, msec] = [0, 0, 0, 0];
    [h, s, m, ms] = [0, 0, 0, 0];
    timer_ui.innerText = `00 : 00 : 00 : 000`;
    record_ui.innerHTML = `<li class="lapHead">LAPS</li>`;
});
pause_ui.addEventListener("click", () => {
    lap_ui.disabled = true;
    clearInterval(int);
});
start_ui.addEventListener("click", () => {
    lap_ui.disabled = false;
    int = setInterval(displayTimer, 10);
});

// !Lap Feature added
lap_ui.addEventListener("click", () => {
  if (msec === 0 && sec == 0) {
    alert("Start Timer first");
  } else {
    let newLi = `<li class="lapRecord">${h}: ${m} : ${s} : ${ms}</li>`;
    record_ui.firstElementChild.insertAdjacentHTML("afterend", newLi);
  }
});