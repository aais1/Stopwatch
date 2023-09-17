let msecond = document.getElementById("msecond");
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let paused;
let time=document.querySelector('.time');
let container=document.querySelector('.container-time');
let buttons=document.querySelectorAll('.btn');


let newMSecond = 0;
let newSecond = 0;
let newMinute = 0;

function start() {
    paused=false;
    time.style.color="green";
    container.style.borderColor="green";
    btnColorGreen();
    initiate();
}

function resume() {
  paused = false;
  time.style.color="green";
  container.style.borderColor="green";
  btnColorGreen();
}

function stop() {
  paused = true;
  time.style.color="red";
  container.style.borderColor="red";
  btnColorRed();
}

function reset() {
    stop();
  newMSecond = 0;
  newSecond = 0;
  newMinute = 0;
  msecond.innerHTML = formatTime(newMSecond);
  second.innerHTML = formatTime(newSecond);
  minute.innerHTML = formatTime(newMinute);
}

function formatTime(value) {
    return value.toString().padStart(2, '0');
  }
  function btnColorGreen(){
      buttons.forEach((value)=>{
          value.style.borderColor="green";
      });
  }
  
  function btnColorRed(){
      buttons.forEach((value)=>{
          value.style.borderColor="red";
      });
  }

function initiate(){
    setInterval(() => {
        if (!paused) {
          if (newMSecond < 100) {
            msecond.innerHTML = formatTime(newMSecond++);
          } else {
            if (newSecond < 61) {
              newSecond++;
              second.innerHTML = formatTime(newSecond);
              newMSecond = 0;
            } else {
              newMinute++;
              minute.innerHTML = formatTime(newMinute);
              newSecond = 0;
            }
          }
        }
      }, 10);
}