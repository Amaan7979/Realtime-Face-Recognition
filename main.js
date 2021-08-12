function preload() {

}
function setup() {
canvas= createCanvas(400,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OfAbBeokz/model.json",modelLoaded);
function draw() {
    image(video,0,0,400,350);
    classifier.classify(video,got_result);
}
console.log("ml5 version",ml5.version);
function modelLoaded() {
    console.log("Model is Loaded");
}
function got_result(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_result").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}