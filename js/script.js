console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Marshmello & Anne-Marie - FRIENDS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Benny Blanco, Halsey & Khalid - Eastside", filePath: "songs/2.mp3", coverPath: "covers/2.jfif"},
    {songName: "DJ Snake - Let Me Love You ft. Justin Bieber", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "DJ Snake - Magenta Riddim", filePath: "songs/4.mp3", coverPath: "covers/4.jfif"},
    {songName: "K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Give Me Some Sunshine", filePath: "https://od.lk/s/NDJfMzk3OTEwNzZf/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Judaai Badlapur  Varun Dhawan, Yami Gautam & Nawazuddin Siddiqui", filePath: "https://od.lk/s/NDJfMzk3OTEwNzlf/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "BCoke Studio Season 8 Tajdar-e-Haram Atif Aslam", filePath: "https://od.lk/s/NDJfMzk3OTEwNjlf/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Hai Apna Dil To Awara  Sanam ft. Soogum Sookha", filePath: "https://od.lk/s/NDJfMzk3OTEwNzFf/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kisi Ki Muskurahaton Pe Ho Nisar", filePath: "https://od.lk/s/NDJfMzk3OTEwNzNf/10.mp3", coverPath: "covers/10.jfif"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('fa-circle-play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

video = document.querySelector('video')
video.PlaybackRate = 5.0;
video.play();