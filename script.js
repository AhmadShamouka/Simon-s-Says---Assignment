const audioGreen = new Audio('./sounds/blue.mp3');
const greenDiv = document.getElementById('green');

const audioRed = new Audio('./sounds/yellow.mp3');
const redDiv = document.getElementById('red');

const audioYellow = new Audio('./sounds/green.mp3');
const yellowDiv = document.getElementById('yellow');

const audioBlue = new Audio('./sounds/red.mp3');
const blueDiv = document.getElementById('blue');

let level=1;
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
  for(i=0;i<level;i++){
      const randomAudio = getRandomAudio();
      randomAudio.name.classList.add('pressed');
      randomAudio.audio.play();
      autoArray.push(randomAudio.id);
      console.log(autoArray)
      setTimeout(() => {
        randomAudio.name.classList.remove('pressed');
      }, 1000);
}
level++;
}



document.addEventListener('keydown', function(event) {
  generateRandom();

});