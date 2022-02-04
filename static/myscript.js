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

        document.getElementById('countdown').innerHTML = '<div class="countdownbox col-xs-2"><span class="countdowninner"><font size="8" color="white">'+days+'</font><font size="2" color="white">Days</font></span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner"><font size="8" color="white">'+hours+'</font><font size="2" color="white">Hrs</font></span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner"><font size="8" color="white">'+minutes+'</font><font size="2" color="white">Mins</font></span></div>';
        document.getElementById('countdown').innerHTML += '<div class="countdownbox col-xs-2"><span class="countdowninner"><font size="8" color="white">'+seconds+'</font><font size="2" color="white">Secs</font></span></div>';
    }

    timer = setInterval(showRemaining, 1000);


    onload = function() {
          if ('speechSynthesis' in window) {
              var synth = speechSynthesis;
    var flag = false;

    /* references to the buttons */
    var playEle = document.querySelector('#play');
    var pauseEle = document.querySelector('#pause');
    var stopEle = document.querySelector('#stop');

    /* click event handlers for the buttons */
    playEle.addEventListener('click', onClickPlay);
    pauseEle.addEventListener('click', onClickPause);
    stopEle.addEventListener('click', onClickStop);

    function onClickPlay() {
    if(!flag){
        flag = true;
        utterance = new SpeechSynthesisUtterance(
              document.querySelector('article').textContent);
        utterance.voice = synth.getVoices()[0];
        utterance.onend = function(){
            flag = false;
        };

        synth.speak(utterance);
    }
    if(synth.paused) { /* unpause/resume narration */
        synth.resume();
    }
    }
    function onClickPause() {
    if(synth.speaking && !synth.paused){ /* pause narration */
        synth.pause();
    }
    }
    function onClickStop() {
    if(synth.speaking){ /* stop narration */
        /* for safari */
        flag = false;
        synth.cancel();
    }
    }
          }
          else {
              /* speech synthesis not supported */
          }
        }
