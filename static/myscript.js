    var end = new Date('02/16/2022 08:45 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Got Married!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = '<div class="countdownbox col-xs-2"><span class="countdowninner">'+days+'<br>days</span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner">'+hours+'<br>hrs</span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner">'+minutes+'<br>mins</span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner">'+seconds+'<br>secs</span></div>';
    }

    timer = setInterval(showRemaining, 1000);
