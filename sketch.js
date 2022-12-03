let musicfile;
let musicfile2;
let music;

let img;
let img2; 

let button;
let button2;
let jumpButton;
let reverseButton;

var sliderVol;
var sliderRate;

var amp;

function preload()
{   
    soundFormats('mp3','ogg');

    img = loadImage('img1.jpg');
    img2 = loadImage('img2.jpg')

    musicfile = loadSound('christmas.mp3', loaded);
    musicfile2 = loadSound('music2.mp3', loaded);
}

function setup()
{
    createCanvas(640, 480);
    background(0);
    textSize(20);
    let a = '20201210 이정민 \n\t mp3 player';
    fill(255);
    text(a, 250, height/2);
    textAlign(CENTER);

    //플레이버튼
    button = createButton("play");
    button.mousePressed(togglePlaying1);
    button.position(10,490);

    //음악선택버튼
    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1; 
    button2.position(65,490);
    
    //위치조절버튼
    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);
    jumpButton.position(140,490);
    
    //역재생버튼
    reverseButton = createButton('reverse');
    reverseButton.mousePressed(reverseSong);
    reverseButton.position(200,490);
     
    //속도조절슬라이드
    sliderRate = createSlider(0.5, 2.5, 1, 0.1);
    sliderRate.position(20, 520);
    
    //볼륨조절슬라이더
    sliderVol = createSlider(0, 1, 1, 0.01);
    sliderVol.position(20,20);

    musicfile.addCue(1, changeText, "All I want for Christmas is You");
    musicfile2.addCue(1, changeText2, "Merry Christmas");
    amp = new p5.Amplitude();

}

function changeText(val) {
    background(img);
    text(val, 350, 200);
}

function changeText2(val) {
    background(img2);
    text(val, 200, 170);
}

function jumpSong() {  
    var len = musicfile.currentTime();
    var len2 = musicfile2.currentTime();
    musicfile.jump(len + 10);
    musicfile2.jump(len2 + 10);
}
    

function reverseSong() {
    musicfile.reverseBuffer();
    musicfile2.reverseBuffer();
}


function draw(){
 
    fill(255);  
    ellipse(musicfile.currentTime()*10, 
    480-amp.getLevel()*1000,20,20);  

    fill(60,255,255);
    let level = amp.getLevel();
    let size = map(level, 0, 1, 0, 200);
    ellipse(100, 100, size, size);

    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 255);
    
    musicfile.setVolume(sliderVol.value());
    musicfile2.setVolume(sliderVol.value());
    fill(255);
    textSize(15);
    text('vol', 160, 30);

    musicfile.rate(sliderRate.value());
    musicfile2.rate(sliderRate.value());

}


function togglePlaying1(){    
    if(music == 1){        
        if(!musicfile.isPlaying()){                        
            musicfile.setVolume(1);           
            musicfile.rate(1);
            musicfile.play();            
            button.html('pause');        
        }else{            
            musicfile.stop();            
            button.html('play');        
        }    
    }    
    if(music == 2){        
        if(!musicfile2.isPlaying()){                                       
            musicfile2.setVolume(1);           
            musicfile2.rate(1);            
            musicfile2.play();          
            button.html('pause');        
        }else{            
            musicfile2.stop();            
            button.html('play');        
        }    
    } 
}

function togglePlaying2(){    
        if(music === 1){        
            music = 2;        
            button2.html('Music2');    
        }else{        
            music = 1;        
            button2.html('Music1');    
        }    
        console.log(music); 
    }

function loaded()
{
    console.log("It's working");

}





