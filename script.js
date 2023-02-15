"use strict";

var time = 0;
var i = 0;
var isrunning = false;
var lap = "00:00:00:00";
var isready;

function begin() {
  if (!isrunning) {
    isrunning = true;
    increment();

    document.getElementById("start").innerHTML = "PAUSE";
    document.getElementById("begin");
  } else {
    isrunning = false;

    if (isready !== undefined) {
      aud.pause();
    }
    document.getElementById("start").innerHTML = "RESUME";
    document.getElementById("begin");
      
  }
}

function increment() {
  if (isrunning) {
    setTimeout(function () {
      time++;
      var t = time / 10;

      var milli = time % 10;
      var secs = Math.floor(t % 60);
      var mins = Math.floor(t / 60);
      var hours = Math.floor(t / 3600);

      if (mins < 10) {
        mins = "0" + mins;
      }
      if (milli < 10) {
        milli = milli + "0";
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }

      lap = hours + ":" + mins + ":" + secs + ":" + milli;

      document.getElementById("output").innerHTML = lap;

      increment();
    }, 100);
  }
}

function reset() {
  isrunning = false;
  time = -1;
  i = 0;

  if (isready !== undefined) {
    aud.pause();
  }
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("output").innerHTML = "00:00:00:00";
  document.getElementById("begin");
}
