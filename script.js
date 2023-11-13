const audioGreen = new Audio('./sounds/blue.mp3');
const greenDiv = document.getElementById('green');

const audioRed = new Audio('./sounds/yellow.mp3');
const redDiv = document.getElementById('red');

const audioYellow = new Audio('./sounds/green.mp3');
const yellowDiv = document.getElementById('yellow');

const audioBlue = new Audio('./sounds/red.mp3');
const blueDiv = document.getElementById('blue');

let level=document.getElementById('level-title');
let up=0
let buttonArray=[]
let autoArray=[];
const audioArray = [
  { id: 1, audio: audioGreen,name:greenDiv},
  { id: 2, audio: audioBlue,name:blueDiv},
  { id: 3, audio:  audioRed,name:yellowDiv},
  { id: 4, audio:  audioYellow,name:redDiv}
];

function getRandomAudio() {
  const randomIndex = Math.floor(Math.random() * audioArray.length);
  return audioArray[randomIndex];
}
function generateRandom() {
      up++;
      levelUp();
      const randomAudio = getRandomAudio()
      autoArray.push(randomAudio.id);
      for(i=0;i<autoArray.length;i++){
        setTimeout(()=>{
          randomAudio.name.classList.add('pressed');
          randomAudio.audio.play();
          setTimeout(() => {
            randomAudio.name.classList.remove('pressed');
          }, 1000); 
        },2000)  ; 
}
console.log(autoArray)
}

function levelUp(){
  
  let Levels=
  level.innerHTML='Level: '+up;
  
  return Levels
}




greenDiv.addEventListener('click', function() {
  greenDiv.classList.add('pressed');
  audioGreen.play();
  setTimeout(() => {
    greenDiv.classList.remove('pressed');
  }, 1000);
  buttonArray.push(1)
  console.log(buttonArray)
  compareTo()
});


redDiv.addEventListener('click', function() {
  redDiv.classList.add('pressed');
  audioRed.play();
  setTimeout(() => {
    redDiv.classList.remove('pressed');
  }, 1000);
  buttonArray.push(4)
  console.log(buttonArray)
  compareTo()
});

yellowDiv.addEventListener('click', function() {
  yellowDiv.classList.add('pressed');
  audioYellow.play();
  setTimeout(() => {
    yellowDiv.classList.remove('pressed');
  }, 1000);
  buttonArray.push(3)
  console.log(buttonArray)
  compareTo()
});

blueDiv.addEventListener('click', function() {
  blueDiv.classList.add('pressed');
  audioBlue.play();
  setTimeout(() => {
    blueDiv.classList.remove('pressed');
  }, 1000);
  buttonArray.push(2)
  console.log(buttonArray)
  compareTo()
});
  
function compareTo(){

  if(buttonArray.length === autoArray.length){
    for (let i = 0; i < buttonArray.length; i++) {
        if (buttonArray[i] !== autoArray[i]) {
            autoArray=[]
            buttonArray=[]
             document.body.style.backgroundColor ='red';
            return;
        }
    }
    generateRandom()
    buttonArray=[]
  }
  
  else if (buttonArray.length > autoArray.length) {
    document.body.style.backgroundColor ='red';

    
    autoArray = [];
    buttonArray = [];
    setTimeout(() => {
      document.body.style.backgroundColor =''; 
    }, 1000); 
  }
  
}

document.addEventListener('keydown', function(event) {
  generateRandom();
});