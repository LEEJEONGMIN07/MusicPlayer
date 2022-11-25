let musicfile;

function setup()
{
    soundFormats('mp3','ogg');
    musicfile = loadSound('christmas', loadMusic);
    //musicfile.play();

}

function loadMusic()
{
    musicfile.play(); //
}

function draw()
{}