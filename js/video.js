
// var video = document.getElementById("player1");

// window.addEventListener
//     ("load", function() {
// 	console.log("Good job opening the window")
//     console.log(video)
//     video.autoplay = true;
//     video.load();
// });

var video;
// var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video = document.querySelector("#player1")
    video.autoplay = false
    console.log("Autoplay is set to" + video.autoplay)
    video.loop = false
    console.log("Loop is set to" + video.loop)
    video.load()
});

// -----LOAD VIDEO -----

// function loadVideo() {
//     video.load();
// }

// document.querySelector("#play").addEventListener
// ("click", loadVideo() );

// window.addEventListener

// -----PLAY VIDEO-----

document.querySelector("#play").addEventListener
("click", function() {
	video.play();
    volume.textContent = volume.value;
});



// -----PAUSE VIDEO-----

document.querySelector("#pause").addEventListener
("click", function(){
	video.pause();
});

// -----SLOW DOWN-----

document.querySelector("#slower").addEventListener
("click", function(){
    video.playbackRate *= .95;
    console.log("Speed is" + video.playbackRate);
});

// need a for loop to incrementally increase/decrease speed?


// -----SPEED UP-----
document.querySelector("#faster").addEventListener
("click", function(){
    video.playbackRate /= 0.95;
    console.log(video.playbackRate);
});

// -----SKIP AHEAD-----


// document.querySelector("#skip").addEventListener
// ("click", function(){
//     video.currentTime += 15;
//     console.log(video.currentTime);
// });

document.querySelector("#skip").addEventListener
("click", function(){
    video.currentTime += 15;
    if (video.currentTime >= video.duration)
        video.currentTime = 0
console.log("current time is" +video.currentTime);
});

// video.addEventListener
// ("ended", function(){
//     video.load();
// });

// -----MUTE-----

document.querySelector("#mute").addEventListener
("click", function()
{if (video.muted) {
    video.muted = false;
    mute.textContent = "Mute";
} else{
    video.muted = true;
    mute.textContent = "Unmute";

}
});

// -----VOLUME SLIDER-----
// document.querySelector("#slider").addEventListener
// ("change", function(){
//     console.log("I am in slider")
//     console.log(this)
//     console.log(this.value)
//     bd = document.querySelector("body")
//     bd.style.fontSize = this.value + "px"
    
// });

// -----DOES NOT WORK -----

// function playVideo() {
//     video.play();
// }

// function pauseVideo() {
//     video.pause();
// }

// document.querySelector("#play").addEventListener
// ("click", playVideo());

// document.querySelector("#play").addEventListener
// ("click", function() {
//     video.load();
// });

// document.querySelector("#skip").addEventListener
// ("click", function(){
//     video.currentTime(video.currentTime() + 15)
//     console.log(video.currentTime);
// });

