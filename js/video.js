
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


document.querySelector("#play").addEventListener
("click", function() {
	video.play();
    document.querySelector('#volume').textContent= (video.volume * 100) + '%';
});


document.querySelector("#pause").addEventListener
("click", function(){
	video.pause();
});


document.querySelector("#slower").addEventListener
("click", function(){
    video.playbackRate *= 0.90;
    console.log("Speed is " + video.playbackRate);
});


document.querySelector("#faster").addEventListener
("click", function(){
    video.playbackRate /= 0.90;
    console.log('Speed is ' + video.playbackRate);
});


document.querySelector("#skip").addEventListener
("click", function(){
    video.currentTime += 10;
    if (video.currentTime >= video.duration){
        video.currentTime = 0}
console.log("current time is" + video.currentTime);
});


document.querySelector('#slider').addEventListener('change', function() {
	video.volume = (this.value)/100;
	document.querySelector('#volume').textContent=this.value + '%';
});

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

document.querySelector('#vintage').addEventListener('click', function() {
	video.classList = 'video oldSchool';
});
document.querySelector('#orig').addEventListener('click', function() {
	video.classList = 'video';
});


