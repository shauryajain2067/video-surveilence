video="";
status="";
function preload(){
video=createVideo("video.mp4");
video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw(){
    image(video,0,0,480,380);
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    video.speed(1);
    video.volume(0);
}