let musicfile;
let button;
function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3','ogg');
    musicfile = loadSound('christmas.mp3', loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    

}

function togglePlaying()
{
    if(!musicfile.isPlaying()){
        musicfile.play();
        button.html('pause');
    }else{
        musicfile.stop();
        button.html('play');
    }
}

function loaded()
{
    //musicfile.play();
    console.log("It's working");
}

function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
}



