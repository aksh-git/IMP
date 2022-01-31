let isPlaying = false;
let mPlayed = new Set();
let currPlayListIndex;
let currPlayList;
let currSongsIndex = new Set();
let curr_track = document.createElement('audio');
let track_index = 0;
let track_list = [];
let songAnimationInterval;

let songs={
    "1":{
        "path":"https://www.dropbox.com/s/oj9p9jomdh0yx8h/big-volcano-lava-bubble-burst.wav?raw=1",
        "name":"Big Valcano"
    },
    "2":{
        "path":"https://www.dropbox.com/s/47p5nwjhefl0vv4/calm-thunderstorm-in-the-jungle.wav?raw=1",
        "name":"Calm Thunderstrome"
    },
    "3":{
        "path":"https://www.dropbox.com/s/jz4xptutbgkmh2l/crickets-and-insects-in-the-wild-ambience.wav?raw=1",
        "name":"Crickets in wild"
    },
    "4":{
        "path":"https://www.dropbox.com/s/ul6d3m8mu5cyww4/crickets-at-night-in-nature.wav?raw=1",
        "name":"Crickets at night"
    },
    "5":{
        "path":"https://www.dropbox.com/s/srdcjfp53e8hfu2/crickets-near-the-river.wav?raw=1",
        "name":"Crickets near river"
    },
    "6":{
        "path":"https://www.dropbox.com/s/yoot5xgb5ltcwg0/light-rain-loop.wav?raw=1",
        "name":"Light rain"
    },
    "7":{
        "path":"https://www.dropbox.com/s/99rd0wmovcuy0yy/night-crickets-near-the-swamp.wav?raw=1",
        "name":"Nigth creckets"
    },
    "8":{
        "path":"https://www.dropbox.com/s/zxfqitmd5sdwdic/night-forest-with-insects.wav?raw=1",
        "name":"Night forest"
    },
    "9":{
        "path":"https://www.dropbox.com/s/4ldmrwe6ybbtvjb/owl-in-a-forest.wav?raw=1",
        "name":"Owl in forest"
    },
    "10":{
        "path":"https://www.dropbox.com/s/cvli9rc82qyn3up/RainFallMedium.mp3?raw=1",
        "name":"Rain-fall"
    },
    "11":{
        "path":"https://www.dropbox.com/s/c5kb7yhgei31vjq/sea-waves-loop.wav?raw=1",
        "name":"Sea waves"
    },
    "12":{
        "path":"https://www.dropbox.com/s/bgxzqwuetbjybk4/WindHeavyGustySpin.mp3?raw=1",
        "name":"Wind gusty spin"
    },
    "13":{
        "path":"https://www.dropbox.com/s/sj4akqwoh8yv1ak/small-waves-harbor-rocks.wav?raw=1",
        "name":"Small waves"
    },
    "14":{
        "path":"https://www.dropbox.com/s/78ndibear6tbblg/summer-night-in-the-forest.wav?raw=1",
        "name":"Summer forest night"
    },
    "15":{
        "path":"https://www.dropbox.com/s/rbot32mse5nwpvo/wind-cold-interior.wav?raw=1",
        "name":"Wind cold interior"
    }
}

const category = {
    "wind":{
        "ids":[13,11,12,15]
    },
    "rain":{
        "ids":[2,6,10]
    },
    "jungle":{
        "ids":[2,8,9,14]
    },
    "sea":{
        "ids":[11,13]
    }
    ,"animals":{
        "ids":[3,4,5,7,9]
    }
    ,"night":{
        "ids":[4,7,8,14]
    }
    ,"volcano":{
        "ids":[1]
    }
}

let combinations = [
    ['rain','jungle'],
    ['wind','rain'],
    ['jungle','wind'],
    ['jungle','wind','rain'],
    ['animals','night','jungle'],
    ['jungle','night'],
    ['valcano','night'],
    ['sea','wind'],
    ['sea','wind','night'],
    ['animals','jungle']
    ['animals','rain'],
    ['rain','night']
]

function play(elem){
    if(elem.classList.contains("fa-play-circle")){
        elem.classList.remove("fa-play-circle");
        elem.classList.add("fa-pause-circle");
        playTrack();
    }else{
        elem.classList.remove("fa-pause-circle");
        elem.classList.add("fa-play-circle");
        pauseTrack();
    }
}

function refreshSongs(elem){
   newSet();
   playTrack();
}
//loadMusic
function loadNewSet(){
    currPlayListIndex = getPlayListIndex();
    currPlayList = combinations[currPlayListIndex];

    currPlayList.forEach(cate => {
        category[cate]["ids"].forEach(id =>{
            if(!currSongsIndex.has(id)){
                currSongsIndex.add(id);
                track_list.push(id);
            }
        });
    });
}

function getPlayListIndex(){
    let index = Math.floor(Math.random()*combinations.length);
    if(mPlayed.size<combinations.length){
        if(mPlayed.has(index)){
            getPlayListIndex();
        }else{
            mPlayed.add(index);
            return index;
        }
    }else{
        mPlayed.clear();
        getPlayListIndex();
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playSongAnimation();
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playSongAnimation();
}  

function nextTrack() {
    if (track_index < track_list.length - 1){
        track_index += 1;
        loadTrack(track_index);
        playTrack();
    }
    else{
       newSet();
       playTrack();
    }
}

function loadTrack(index) {
    curr_track.src = songs[track_list[index]]["path"]
    curr_track.load();
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function newSet(){
    mPlayed.clear();
    currSongsIndex.clear();
    track_index=0;
    track_list = [];
    currPlayListIndex = 0;
    currPlayList = null;
    loadNewSet();
    loadTrack(track_index);
}

function randomColor(){
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let bgColor = "rgb(" + red + ", " + green + ", " + blue +")";
    return bgColor;
}

function playSongAnimation(){
    if(isPlaying){
        songAnimationInterval = setInterval(()=>{
            songIcon.style.color = randomColor();
            playerbg.style.borderColor = randomColor();
        },700);
    }else{
        clearInterval(songAnimationInterval);
    }
}

