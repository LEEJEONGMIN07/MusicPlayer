let musicfile;
let musicfile2;
let music;
let jump;

let img;
let img2; 

let button;
let button2;
let jumpButton;
let ratebutton;

var sliderVol;
var sliderRate;

var amp;

var t = 0;

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
    jumpButton = createButton('jump1');
    jumpButton.mousePressed(jumpSong);
    jump = 1;
    jumpButton.position(140,490);
     
    //속도조절슬라이드
    ratebutton = createButton('rate');
    ratebutton.position(10,520);
    sliderRate = createSlider(0.5, 2.5, 1, 0.1);
    sliderRate.position(50, 520);
    
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

function mousePressed() {
    t = musicfile.duration()/5*jump;
    t2 = musicfile2.duration()/5*jump;
    
}

function jumpSong() {  
    musicfile.jump(t);
    musicfile2.jump(t2);

    if(jump === 1){        
        jump = 2;        
        jumpButton.html('jump2');    
    }else if(jump === 2){        
        jump = 3;        
        jumpButton.html('jump3');    
    }else if(jump === 3){        
        jump = 4;        
        jumpButton.html('jump4');    
    }else if(jump === 4){        
        jump = 5;        
        jumpButton.html('jump5');    
    }else{        
        jump = 1;        
        jumpButton.html('jump1');    
    }      
}

function draw(){
    let level = amp.getLevel();
    let size = map(level, 0, 1, 0, 200);
    fill(255);  
    ellipse(musicfile.currentTime()*10, 
    480-amp.getLevel()*1000,size,size);  

    //fill(60,255,255);
    //ellipse(100, 100, size, size);
    
    var diam = map(level, 0, 0.3, 10, 255);
    
    musicfile.setVolume(sliderVol.value());
    musicfile2.setVolume(sliderVol.value());
    fill(255);
    textSize(15);
    text('volume', 175, 30);

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
    }

function loaded()
{
    console.log("It's working");
}