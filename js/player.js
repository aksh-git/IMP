//var songs = require('../assets/songs.json');
let isPlaying = false;
let mPlayed = new Set();
//let currSongsIndex = new Set();
let curr_track = document.createElement('audio');
let track_list;

function play(elem){
    if(elem.classList.contains("fa-play-circle-o")){
        elem.classList.remove("fa-play-circle-o");
        elem.classList.add("fa-pause-circle-o");
        playTrack();
    }else{
        elem.classList.remove("fa-pause-circle-o");
        elem.classList.add("fa-play-circle-o");
        pauseTrack()
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
}  

function nextTrack() {
    if (track_index < track_list.length)
      track_index += 1;
    else track_index = 1;
    loadTrack(track_index);
    playTrack();
}


function loadTrack(index) {
    curr_track.src = track_list[index]["path"];
    curr_track.load();
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}