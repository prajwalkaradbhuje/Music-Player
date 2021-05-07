
const music = document.querySelector("audio");
const img =document.querySelector("img");
const play =document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
{
    name:"song-1",
    title:"Ganpati-1",
    artist:"Unknown",
},
{
    name:"song-2",
    title:"Ganpati-2",
    artist:"Unknown",
},
{
    name:"song-3",
    title:"Ganpati-3",
    artist:"Unknown",
}];

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("animation");
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("animation");
};

play.addEventListener("click", () => {
    // isPlaying ? pauseMusic():playMusic();
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src ="music/" + songs.name +".mp3";
    img.src = "image/" + songs.name +".jpg";
};

songIndex = 0;
loadSong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

