
/*------------------------------- navbar  --------------------------------------------*/ 

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {

            for (let j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active');
            }

            this.classList.add('active');
        });
    }
});

let navWidth = $("nav").outerWidth()
$(".bars").click(function () {
    if ($("nav").css("left") == "0px") {
        $("nav").animate({ left: -navWidth }, 500)
    }
    else {
        $("nav").animate({ left: 0 }, 500)
    }
})


/*------------------------------- slider --------------------------------------------*/ 


$(document).ready(function () {
    $('#sliderDown .inner:first').addClass('active').show();

    $('#sliderDown .toggle').click(function () {
        var $inner = $(this).next('.inner');
        if ($inner.hasClass('active')) {
            $inner.removeClass('active').slideUp();
        } else {
            $('#sliderDown .inner').removeClass('active').slideUp();
            $inner.addClass('active').slideDown();
        }
    });
});



/*-------------------------------  main counter --------------------------------------------*/ 







$(document).ready(function() {
    // Set a specific date in Egyptian time zone
    var specificDate = new Date('2024-11-24T00:00:00Z'); 

    // Function to get the current time in Egypt
    function getCurrentTimeInEgypt() {
        var options = { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        var formatter = new Intl.DateTimeFormat('en-US', options);
        var currentDate = new Date();
        return formatter.format(currentDate);
    }

    // Function to calculate the countdown
    function calculateCountdown(targetDate) {
        var now = new Date();
        var timeZoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
        var egyptOffset = -120 * 60 * 1000; 


        var adjustedTargetDate = new Date(targetDate.getTime() + timeZoneOffset + egyptOffset);
        var timeDifference = adjustedTargetDate - now; 

        var seconds = Math.floor(timeDifference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        return {
            seconds: seconds % 60,
            minutes: minutes % 60,
            hours: hours % 24,
            days: days
        };
    }



    // Function to display the countdown
    function displayCountdown() {
        var countdown = calculateCountdown(specificDate);

        let x =`
            <div class="col-md-3">
              <div class="inner d-flex justify-content-center align-items-center">
                <span class="days text-white">${countdown.days + "d"}</span>
              </div>
            </div>

            <div class="col-md-3">
              <div class="inner d-flex justify-content-center align-items-center">
                <span class="hours text-white">${countdown.hours + "h"}</span>
              </div>
            </div>

            <div class="col-md-3">
              <div class="inner d-flex justify-content-center align-items-center">
                <span class="minutes text-white">${countdown.minutes + "m"}</span>
              </div>
            </div>

            <div class="col-md-3">
              <div class="inner d-flex justify-content-center align-items-center">
                <span class="seconds text-white">${countdown.seconds + "s"}</span>
              </div>
            </div>
        `;
        $("#Details .container .row").html(x);
    }

    // Update the countdown every second
    setInterval(displayCountdown, 1000);

    // Display the initial countdown
    displayCountdown();

});










/*------------------------------- text area count--------------------------------------------*/ 
let maxLength = 100 ; 

$("textarea").keyup(function(){
    let length = $(this).val().length;
    let amountLeft = maxLength - length ;
    if(amountLeft<=0){
        $(".chars span").text("your available character finished");
    }
    else{
        $(".chars span").text(amountLeft);

    }
})