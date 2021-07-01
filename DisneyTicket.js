// ==UserScript==
// @name         Disney Ticket LA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @include      https://disneyland.disney.go.com/admission/tickets/dates/*
// ==/UserScript==

(function() {
    'use strict';
     var dates = ['2021-07-01','2021-07-02','2021-07-03','2021-07-04','2021-07-05'];
    setInterval(function(){
        var button = document.getElementsByTagName("com-tix-sales-date-selection")[0].shadowRoot.querySelector("com-button[name='parks']");

        if (button){
            var notSelected = button.getAttribute('class').indexOf("notSelected") >-1;
            if (notSelected){
                button.click();
                console.log("Parks selected")
            }
        }
    }, 1000);

    //button.click();
    setInterval(function(){

        var calendar = document.getElementsByTagName("com-tix-sales-date-selection")[0].shadowRoot.getElementById("availCalendar").shadowRoot
        var valid = false;
        dates.map(e=>{
            var value = calendar.querySelector("com-calendar-date[slot='"+e+"']").getAttribute('aria-label');
            if (value.indexOf("Both Parks Available")>-1 || value.indexOf("Disneyland Park Available")>-1){
                valid = true;
            }
        });

        console.log(valid);
        if (valid){
            setInterval(function(){
                var url = "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav";
                var audio = new Audio(url);
                audio.play();
            },2000);
        } else {
            setTimeout(function(){
            location.reload();
        },5000)};
    }, 15000);


    // Your code here...
})();