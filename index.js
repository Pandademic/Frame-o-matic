function preload(){

}
function setup() {
  createCanvas(700,700);
  video=createCapture(VIDEO);
  video.hide();
}
function draw(){
    background(800);
    image(video,15,15,0,0);
    circle(10,525,120);
    circle(600,50,120);//top
    circle(60,50,120);//top
    circle(600,525,120);
}
function take_snapshot(){
    save('picture.png');
}