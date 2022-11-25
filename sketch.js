var musicfile;
var button;

function setup()
{
    soundFormats('mp3','ogg');
    musicfile = loadSound('christmas', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(50);

}

function togglePlaying()
{
    if(!musicfile.isPlaying()){
        musicfile.play();
        musicfile.setVolume(0.3);
        button.html('pause');
    }

    else{musicfile.stop();
    button.html('play');}

}

function loaded()
{
    musicfile.play();
    console.log('loaded');
}



