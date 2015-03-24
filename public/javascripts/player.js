function loadPlayer() {
        var audioPlayer = new Audio();
        audioPlayer.controls="controls";
        audioPlayer.addEventListener('ended',nextSong,false);
        audioPlayer.addEventListener('error',errorFallback,true);
        document.getElementById("player").appendChild(audioPlayer);
        nextSong();
    }
    function nextSong() {
        if(urls[next]!=undefined) {
            var audioPlayer = document.getElementsByTagName('audio')[0];
            if(audioPlayer!=undefined) {
                audioPlayer.src=urls[next];
                audioPlayer.load();
                audioPlayer.play();
                next++;
            } else {
                loadPlayer();
            }
        } else {
            alert('the end!');
        }
    }
    function errorFallback() {
            nextSong();
    }
    function playPause() {
        var audioPlayer = document.getElementsByTagName('audio')[0];
        if(audioPlayer!=undefined) {
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } else {
            loadPlayer();
        }
    }
    function pickSong(num) {
        next = num;
        nextSong();
    }

    var urls = new Array();
        urls[0] = 'http://k003.kiwi6.com/hotlink/voy7rak6pj/centralpark.wav';
        urls[1] = 'https://dl-web.dropbox.com/get/audio/Denmark.wav?_subject_uid=9991253&w=AAAK8ApzBxslr_Ell-Ivl2BaQdb2ACYvkNUP87IWShGX0w';
        urls[2] = 'https://dl-web.dropbox.com/get/audio/intothewoods.mp3?_subject_uid=9991253&w=AABaehw3x5qZAkR9lTIbX3ORIkuvnFhlivWqod4VLzqsng';

    var next = 0;
