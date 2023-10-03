"use strict";

document.addEventListener("DOMContentLoaded", function(){

    const btnStart = document.getElementById("start")
    const btnStop = document.getElementById("stop")
    const btnReset = document.getElementById("reset")

    const timer = document.getElementById("timer")
    const span = document.getElementById("ms")
    let hours = 0
    let minutes = 0
    let second = 0
    let msecond = 0
    let IntervalID;
    timer.innerText = `0${hours} : 0${minutes} : 0${second}`
    span.innerText = `.0${msecond}`

    btnStart.addEventListener("click", ()=>{
        btnStart.classList.remove("show")
        btnStart.classList.add("hide")
        IntervalID = setInterval(()=>{
            msecond++
            if(msecond>99){
                msecond = 0
                second++
            }
            if(second>59){
                second = 0
                minutes++
            }
            if(minutes>59){
                minutes = 0
                hours++
            }
            // Add leading zeros if needed
            second = second.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            hours = hours.toString().padStart(2, '0');
            msecond = msecond.toString().padStart(2, '0');

            timer.innerText = hours +" : "+ minutes +" : "+ second
            span.innerText = `.${msecond}`
       }, 10)
    })
    
    btnStop.addEventListener("click", ()=>{
        btnStart.classList.add("show")
        clearInterval(IntervalID)

    })

    btnReset.addEventListener("click", ()=>{
        btnStart.classList.add("show")
        clearInterval(IntervalID)
        hours = 0
        minutes = 0
        second = 0
        msecond=0
        timer.innerText = `0${hours} : 0${minutes} : 0${second}`
        span.innerText = `.0${msecond}`
    })


})