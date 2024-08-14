let plstBoxes = [];
let songBoxes = [];
let allSongs = [];
let currentIndex;
let songBoxesLength;
let isPlay = false;
let songType = "";
const superBtn = document.querySelector(".superBtn");
const audioElement = document.querySelector(".audioElement");
const songImg = document.querySelector(".leftSongBox .upRow img");
const songNamePara = document.querySelector(".leftSongBox .upRow .infoBox .songNamePara");
const artistNamePara = document.querySelector(".leftSongBox .upRow .infoBox .artistNamePara");

// Default song container functionality
let audioSrc = defaultSong.song;
audioElement.src = audioSrc;
songImg.src = defaultSong.image;
songNamePara.textContent = defaultSong.title;
artistNamePara.textContent = defaultSong.artist;
btnPlayPause();
rangeBarFnc();
// rangebar

function rangeBarFnc() {
const rangeBar = document.querySelector(".rangeBar");
  audioElement.addEventListener("timeupdate", () => {
    rangeBar.value = (audioElement.currentTime / audioElement.duration) * 100;
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = rangeBar.value + "%";
    if (audioElement.currentTime == (audioElement.duration)) {
      if ((currentIndex + 1) < songBoxesLength) {
        audioElement.src = allSongs[currentIndex + 1].song;
        songImg.src = allSongs[currentIndex + 1].image;
        songNamePara.textContent = allSongs[currentIndex + 1].title;
        artistNamePara.textContent = allSongs[currentIndex + 1].artist;
        isPlay = true;
        playFnc();
        currentIndex += 1;
      }
    }
  })
  rangeBar.addEventListener("input", () => {
    audioElement.currentTime = rangeBar.value * audioElement.duration / 100;
  })
}

// playlist boxes
for (let i = 0; i < playlist.length; i++) {
  const plstBox = document.createElement("div");
  plstBox.className = "playlistBox";
  const plstImg = document.createElement("img");
  plstImg.src = playlist[i].image;
  const songName = document.createElement("p");
  songName.className = "songName";
  songName.textContent = playlist[i].title;
  plstBox.appendChild(plstImg);
  plstBox.appendChild(songName);
  document.querySelector(".playlistCon").appendChild(plstBox);
  plstBoxes.push(plstBox);
}

// backin boxes
for (let i = 0; i < backInData.length; i++) {
  const backInDiv = document.createElement("div");
  backInDiv.className = "backinBox";
  backInDiv.classList.add("hzScrollBox")

  const backInimg = document.createElement("img");
  backInimg.src = backInData[i].image;
  backInimg.alt = "image";

  const backInP = document.createElement("p");
  backInP.style.textAlign = "center";
  backInP.style.fontWeight = "bold";
  backInP.textContent = backInData[i].title;

  backInDiv.appendChild(backInimg);
  backInDiv.appendChild(backInP);
  document.querySelector(".backinCon").appendChild(backInDiv);
}
for (let i = 0; i < today.length; i++) {
  const todayDiv = document.createElement("div");
  todayDiv.className = "todayBox";
  todayDiv.classList.add("hzScrollBox")

  const todayImg = document.createElement("img");
  todayImg.src = today[i].image;
  todayImg.alt = "image";

  const todayP = document.createElement("p");
  todayP.style.textAlign = "center";
  todayP.style.fontWeight = "bold";
  todayP.textContent = today[i].title;

  todayDiv.appendChild(todayImg);
  todayDiv.appendChild(todayP);
  document.querySelector(".todayCon").appendChild(todayDiv);
}



// on clicking playlist boxes
function getPlstIndex() {
  plstBoxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      document.querySelector(".homePage").style.display = "none";
      document.querySelector(".songPage").style.display = "flex";
      makeSongPage(playlist[index].type, index);
    })
  })
}
getPlstIndex()

function makeSongPage(plstType, plstIndex) {
  songBoxes = [];
  const songBoxCon = document.querySelector(".songBoxCon")
  songBoxCon.innerHTML = "";
  document.querySelector(".songPageNav span").textContent = playlist[plstIndex].title;
  document.querySelector(".songInfoCon h1").textContent = playlist[plstIndex].title;
  document.querySelector(".songPage .topBox img").src = playlist[plstIndex].image;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type.includes(plstType)) {
      const songBox = document.createElement('div');
      songBox.className = 'songBox';
      const img = document.createElement('img');
      img.src = data[i].image;
      const songInfo = document.createElement('div');
      songInfo.className = 'songInfo';
      const aboutSong = document.createElement('div');
      aboutSong.className = 'aboutSong';
      const songTitle = document.createElement('p');
      songTitle.className = 'songTitle ellips';
      songTitle.textContent = data[i].title;
      const singerName = document.createElement('p');
      singerName.className = 'singerName ellips';
      singerName.textContent = data[i].artist;
      aboutSong.appendChild(songTitle);
      aboutSong.appendChild(singerName);
      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.className = 'fa-solid fa-ellipsis-vertical';
      songInfo.appendChild(aboutSong);
      songInfo.appendChild(ellipsisIcon);
      songBox.appendChild(img);
      songBox.appendChild(songInfo);
      document.querySelector(".songBoxCon").appendChild(songBox);
      songBox.setAttribute("index-count", i);
      songBoxes.push(songBox);
      songType = plstType;
    }
  }
  onSongBoxClick()
}

function onSongBoxClick() {
  allSongs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type.includes(songType)) {
      allSongs.push(data[i]);
    }
  }
  songBoxes.forEach((box, index) => {

    box.addEventListener("click", () => {
      let songBoxTitle = document.querySelectorAll(".songTitle");
      songBoxesLength = songBoxes.length;
      currentIndex = index;
      setInterval(() => {
        songBoxTitle.forEach(a => {
          a.style.color = "white";
        })
        songBoxTitle[currentIndex].style.color = "#21D801"
      }, 1)
      audioSrc = allSongs[index].song;
      audioElement.src = audioSrc;
      superBtn.classList.remove("fa-circle-play");
      superBtn.classList.add("fa-circle-pause");
      audioElement.play();
      isPlay = true;
      rangeBarFnc()
      songImg.src = allSongs[currentIndex].image;
      songNamePara.textContent = allSongs[currentIndex].title;
      artistNamePara.textContent = allSongs[currentIndex].artist;
      songBoxes = [];
      btnPlayPause();
    })
  })
}

function refresh(index) {
  audioElement.src = allSongs[index].song;
  document.querySelector(".leftSongBox .upRow img").src = allSongs[index].image;
  document.querySelector(".leftSongBox .upRow .infoBox .songNamePara").textContent = allSongs[index].title;
}

function playFnc() {
  superBtn.classList.remove("fa-circle-play");
  superBtn.classList.add("fa-circle-pause");
  audioElement.play();
}

function pauseFnc() {
  superBtn.classList.remove("fa-circle-pause");
  superBtn.classList.add("fa-circle-play");
  audioElement.pause();
}

function btnPlayPause() {
  superBtn.addEventListener("click", () => {
    if (isPlay) {
      pauseFnc();
      setTimeout(() => {
        isPlay = false;
      }, 100)
    }
    else {
      playFnc()
      setTimeout(() => {
        isPlay = true;
      }, 100)
    }
  })
}

function getBackHome(){
  document.querySelector(".songPage").style.display = "none";
  document.querySelector(".homePage").style.display = "flex";
}
document.querySelector(".songPageBackBtn").addEventListener("click", getBackHome);
document.querySelector(".leftBox .iconBox .houseBtn").addEventListener("click", getBackHome);
