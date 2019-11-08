let songInfo = document.querySelectorAll('.songInfo');
let albumCovers = document.querySelectorAll('.albumCovers');
let img1 =document.getElementById("soundtrack1");
let img2 = document.getElementById("soundtrack2");
let img3 = document.getElementById("soundtrack3");
let img4 = document.getElementById("soundtrack4");
let players = document.querySelectorAll('audio');
let audioPlayer = document.querySelectorAll('.audioPlayer');
function hideInfo() {
  songInfo.forEach(function(el) {
    el.style.display = 'none';
  });
}
function hideAudio(){
  audioPlayer.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideInfo();
hideAudio();
albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  hideInfo();
  hideAudio();
  switch (e.target.getAttribute('id')) {
    case 'hardLove':
      document.querySelector('#audio1')
        .style.display = 'block';
      break;
    case 'wasteland':
      document.querySelector('#audio2')
        .style.display = 'block';
      break;
    case 'theOutsiders':
      document.querySelector('#audio3')
      .style.display = 'block';
      break;
    case 'theHeat':
      document.querySelector('#audio4')
      .style.display = 'block';
        break;
      }
    }
  });
