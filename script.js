let masterPlay = document.querySelector(".masterPlay");
let gif = document.querySelector("#gif");
let progressBar = document.querySelector("#myProgressBar");
let progressWidth;
let progressed = document.querySelector(".progressed");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let playButton = document.querySelector(".playButton");
let songName = document.querySelector(".songName");
let songinfo = document.querySelector(".songinfo");
let songDetail = document.querySelector(".songDetail");
let index = 1;
//console.log(songinfo);

let songs = [
  {
    songName: "Dil ibadat ",
    //audioElement:new Audio("music/Dil Ibaadat(PagalWorld.com.se).mp3"),
    songSource: "music/Dil Ibaadat(PagalWorld.com.se).mp3",
    singer: "Javed Ali",
    cover: "covers/1.jpg",
    // index:0
  },
  {
    songName: "Galliyan Returns",
    songSource: "music/Galliyan Returns_320(PagalWorld.com.se).mp3",
    singer: "Ankit Tiwari",
    //audioElement:new Audio("music/Galliyan Returns_320(PagalWorld.com.se).mp3"),
    cover: "covers/2.jpg",
    // index:1
  },
  {
    songName: "Kesariya",
    songSource: "music/Kesariya_320(PagalWorld.com.se).mp3",
    //audioElement:new Audio("music/Kesariya_320(PagalWorld.com.se).mp3"),
    singer: "Arijit singh",
    cover: "covers/3.jpg",
    // index:2
  },
  {
    songName: "Pasoori ",
    songSource: "music/Mere Dhol Judaiyan Di_320(PagalWorld.com.se).mp3",
    singer: "Ali Sethi and Shae Gill",
    cover: "covers/4.jpg",
    //audioElement:new Audio("music/Lagta Hai Dil Teri Shaamat Aayi Hai_320(PagalWorld.com.se).mp3"),
    // index:3
  },
  {
    songName: "Tera Naam Dil Rakh Diya",
    songSource:
      "music/Maine Tera Naam Dil Rakh Diya_320(PagalWorld.com.se).mp3",
    singer: "Ankit Tiwari",
    //audioElement:new Audio("music/Maine Tera Naam Dil Rakh Diya_320(PagalWorld.com.se).mp3"),
    cover: "covers/5.jpg",
    // index:4
  },
  {
    songName: "Mann Mera ",
    songSource: "music/Mann Mera (Reprise)_320(PagalWorld.com.se).mp3",
    singer: "Ankit Tiwari",
    //audioElement:new Audio("music/Maine Tera Naam Dil Rakh Diya_320(PagalWorld.com.se).mp3"),
    cover: "covers/6.jpg",
    // index:5
  },
];

var audioElement = new Audio(songs[1].songSource);

//handling cover and song

songItems.forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].cover;
  e.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  e.getElementsByClassName("timestamp")[0].innerText =
    i + 1 + ":" + i + 3 + "s";

});

//handling small playbutton
const playAll = () => {
  Array.from(document.getElementsByClassName("playButton")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    }
  );
};

const pauseAll = () => {
  Array.from(document.getElementsByClassName("playButton")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
      audioElement.pause();
      masterPlay.classList.remove("fa-pause");
      masterPlay.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("playButton")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      if (audioElement.paused) {
        playAll();
 
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = songs[i].songSource;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        index = e.target.id;
        songDetail.innerText =
          songs[index].songName + ":" + songs[index].singer;
      } else if (index == e.target.id) {
        //agar gaana play ho raha hai aur usko stop karna hai small playButton se
        pauseAll();
        gif.style.opacity = 0;
      } else {
        playAll();
      
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = songs[i].songSource;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
        index = e.target.id;
        songDetail.innerText =
          songs[index].songName + ":" + songs[index].singer;
      }
    });
  }
);

masterPlay.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    document.getElementById(index).classList.remove("fa-play"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-pause"); //small playbutton synchronisng with master play button
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    document.getElementById(index).classList.remove("fa-pause"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-play"); //small playbutton synchronisng with master play button
    gif.style.opacity = 0;
  }
});

//handling previous button

let previous = document.querySelector("#previous");
previous.addEventListener("click", () => {
  if (index <= 0) {
    audioElement.src = songs[songs.length - 1].songSource;
    index = songs.length - 1;
    pauseAll();
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    document.getElementById(index).classList.remove("fa-play"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-pause"); //small playbutton synchronisng with master play button
    gif.style.opacity = 1;
    songDetail.innerText = songs[index].songName + ":" + songs[index].singer;
  } else {
    audioElement.src = songs[index - 1].songSource;
    index -= 1;
    pauseAll();
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    document.getElementById(index).classList.remove("fa-play"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-pause"); //small playbutton synchronisng with master play button
    gif.style.opacity = 1;
    songDetail.innerText = songs[index].songName + ":" + songs[index].singer;
  }
});

//handling next

let next = document.querySelector("#next");
next.addEventListener("click", () => {
  if (index >= songs.length - 1) {
    index = 0;
    audioElement.src = songs[index].songSource;
    pauseAll();
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    document.getElementById(index).classList.remove("fa-play"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-pause"); //small playbutton synchronisng with master play button
    gif.style.opacity = 1;
    songDetail.innerText = songs[index].songName + ":" + songs[index].singer;
  } else {
    index += 1;
    audioElement.src = songs[index].songSource;
    pauseAll();
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    document.getElementById(index).classList.remove("fa-play"); //small playbutton synchronisng with master play button
    document.getElementById(index).classList.add("fa-pause"); //small playbutton synchronisng with master play button
    gif.style.opacity = 1;
    songDetail.innerText = songs[index].songName + ":" + songs[index].singer;
  }
});

//handling progressBar/seekbar

audioElement.addEventListener("timeupdate", () => {
  //console.log(audioElement);
  progressWidth = (audioElement.currentTime / audioElement.duration) * 100;
  progressed.style.width = progressWidth + "%";
});

progressBar.addEventListener("click", (e) => {
  // console.log(progressBar.offsetWidth)
  // console.log(audioElement.duration);

  audioElement.currentTime =
    (e.offsetX / progressBar.offsetWidth) * audioElement.duration;
});

//song ending

audioElement.addEventListener("timeupdate", () => {
  if (
    Math.floor(audioElement.currentTime) >= Math.floor(audioElement.duration)
  ) {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    document.getElementById(index).classList.remove("fa-pause");
    document.getElementById(index).classList.add("fa-play");
    progressed.style.width = 0;
    gif.style.opacity = 0;
  }
});

// handling volume
const volumeControl = document.getElementById("volume-control");
volumeControl.addEventListener("input", function() {
  audioElement.volume = volumeControl.value;
});