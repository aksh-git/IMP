function play(elem){
    if(elem.classList.contains("fa-play-circle-o")){
        elem.classList.remove("fa-play-circle-o");
        elem.classList.add("fa-pause-circle-o");
    }else{
        elem.classList.remove("fa-pause-circle-o");
        elem.classList.add("fa-play-circle-o")
    }
}