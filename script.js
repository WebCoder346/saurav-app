let plstBoxes = [];
let songBoxes = [];
let allSongs = [];
let freshMusicBoxes = [];
// let backInBoxes = [];
let currentIndex;
let songBoxesLength;
let isPlay = false;
let songType;
const songPage = document.querySelector(".songPage")
const homePage = document.querySelector(".homePage")
const superBtn1 = document.querySelector(".superBtn1");
const superBtn2 = document.querySelector(".superBtn2");
const audioElement = document.querySelector(".audioElement");
const songImg = document.querySelector(".leftSongBox .upRow img");
const songNamePara = document.querySelector(".leftSongBox .upRow .infoBox .songNamePara");
const artistNamePara = document.querySelector(".leftSongBox .upRow .infoBox .artistNamePara");
const footerCon = document.querySelector(".footerCon");
const upFooterImg = document.querySelector(".upFooter img")
const upFooterArtist = document.querySelector(".upFooter .upFooterInfo .upFooterArtist")
const upFooterTitle = document.querySelector(".upFooter .upFooterInfo .upFooterTitle")
const upFooterBtn = document.querySelector(".upFooterBtn")
const phoneSongPage = document.querySelector(".phoneSongPage");

// Default song container functionality
let audioSrc = defaultSong.song;
audioElement.src = audioSrc;
document.querySelectorAll(".songImages").forEach(songImg => {
  songImg.src = defaultSong.image;
})
document.querySelectorAll(".songNames").forEach(songName => {
  songName.textContent = defaultSong.title;
})
document.querySelectorAll(".artistNames").forEach(artistName => {
  artistName.textContent = defaultSong.artist;
})


btnPlayPause();
rangeBarFnc();

// rangebar
function updateAll(currentIndex) {
  document.querySelectorAll(".songImages").forEach(songImg => {
    songImg.src = allSongs[currentIndex].image;
  })
  document.querySelectorAll(".songNames").forEach(songName => {
    songName.textContent = allSongs[currentIndex].title;
  })
  document.querySelectorAll(".artistNames").forEach(artistName => {
    artistName.textContent = allSongs[currentIndex].artist;
  })
}

function timeFnc() {
  let minTime = parseInt(Math.floor(audioElement.currentTime / 60));
  let secTime = parseInt(Math.floor(audioElement.currentTime % 60));

  minTime < 10 ? minTime = `0${minTime}` : minTime = minTime;
  secTime < 10 ? secTime = `0${secTime}` : secTime = secTime;

  let dmt = parseInt(Math.floor(audioElement.duration / 60));
  let dst = parseInt(Math.floor(audioElement.duration % 60));
  dmt < 10 ? dmt = `0${dmt}` : dmt = dmt;
  dst < 10 ? dst = `0${dst}` : dst = dst;
  if (minTime || secTime || dmt || dst) {
    document.querySelector(".cTimePara").textContent = `${minTime}:${secTime}`;
    document.querySelector(".dTimePara").textContent = `${dmt}:${dst}`;
  }
}

function rangeBarFnc() {
  const rangeBars = document.querySelectorAll(".rangeBar");
  audioElement.addEventListener("timeupdate", () => {
    timeFnc();
    rangeBars.forEach(rangeBar => {

      rangeBar.value = (audioElement.currentTime / audioElement.duration) * 100;
      document.querySelectorAll(".progress").forEach(progressBar => {
        progressBar.style.width = rangeBar.value + "%";
      })

      if (audioElement.currentTime == (audioElement.duration)) {
        if ((currentIndex + 1) < songBoxesLength) {
          audioElement.src = allSongs[currentIndex + 1].song;
          updateAll(currentIndex + 1);
          isPlay = true;
          playFnc();
          currentIndex += 1;
        }
      }
      rangeBar.addEventListener("input", () => {
        audioElement.currentTime = rangeBar.value * audioElement.duration / 100;
      })
    })
  })

}

// playlist boxes
for (let i = 0; i < playlist.length; i++) {
  const plstBox = document.createElement("div");
  plstBox.className = "playlistBox";
  plstBox.classList.add("plstBoxes");
  const plstImg = document.createElement("img");
  plstImg.src = playlist[i].image;
  const songName = document.createElement("p");
  songName.className = "songName";
  songName.classList.add("ellips");
  songName.textContent = playlist[i].title;
  plstBox.appendChild(plstImg);
  plstBox.appendChild(songName);
  document.querySelector(".playlistCon").appendChild(plstBox);
  plstBoxes.push(plstBox);
}

//fresh music

for (let i = 0; i < freshData.length; i++) {
  const freshDiv = document.createElement("div");
  freshDiv.className = "freshBox";
  freshDiv.classList.add("hzScrollBox")
  const freshImg = document.createElement("img");
  freshImg.src = freshData[i].image;
  freshImg.alt = "image";

  const freshP = document.createElement("p");
  freshP.style.textAlign = "center";
  freshP.style.fontWeight = "bold";
  freshP.textContent = freshData[i].title;

  freshDiv.appendChild(freshImg);
  freshDiv.appendChild(freshP);
  document.querySelector(".freshCon").appendChild(freshDiv);
  freshMusicBoxes.push(freshDiv);
  freshBoxClick()
}
//on clicking freshPlaylist
function freshBoxClick() {
  let freshBoxes = document.querySelectorAll(".freshBox");
  freshBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      homePage.style.display = "none";
      songPage.style.display = "flex";
      makeSongPage(freshData[index].type, index, freshData);

    })
  })
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
  // backInBoxes.push(backInDiv);
  onBackInBoxClick();
}
// On back in box click
function onBackInBoxClick() {
  let backinBoxes = document.querySelectorAll(".backinBox");
  backinBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      homePage.style.display = "none";
      songPage.style.display = "flex";
      makeSongPage(backInData[index].type, index, backInData);

    })
  })
}

for (let i = 0; i < todayData.length; i++) {
  const todayDiv = document.createElement("div");
  todayDiv.className = "todayBox";
  todayDiv.classList.add("hzScrollBox")

  const todayImg = document.createElement("img");
  todayImg.src = todayData[i].image;
  todayImg.alt = "image";

  const todayP = document.createElement("p");
  todayP.style.textAlign = "center";
  todayP.style.fontWeight = "bold";
  todayP.textContent = todayData[i].title;

  todayDiv.appendChild(todayImg);
  todayDiv.appendChild(todayP);
  document.querySelector(".todayCon").appendChild(todayDiv);
  onTodayBoxClick();
}

function onTodayBoxClick() {
  console.log("TodayBox created");
  let todayBoxes = document.querySelectorAll(".todayBox");
  todayBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      console.log("Hello Today")
      homePage.style.display = "none";
      songPage.style.display = "flex";
      makeSongPage(todayData[index].type, index, todayData);

    })
  })
}



// on clicking playlist boxes
function getPlstIndex() {
  const playlistBoxes = document.querySelectorAll(".plstBoxes");
  playlistBoxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      homePage.style.display = "none";
      songPage.style.display = "flex";
      makeSongPage(playlist[index].type, index, playlist);
    })
  })
}
getPlstIndex()

function makeSongPage(plstType, plstIndex, dataName) {
  songBoxes = [];
  const songBoxCon = document.querySelector(".songBoxCon")
  songBoxCon.innerHTML = "";
  document.querySelector(".songPageNav span").textContent = dataName[plstIndex].title;
  document.querySelector(".songInfoCon h1").textContent = dataName[plstIndex].title;
  document.querySelector(".songPage .topBox img").src = dataName[plstIndex].image;
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
      playFnc()

      upFooterBtn.classList.remove("fa-play");
      upFooterBtn.classList.add("fa-pause");

      audioElement.play();
      isPlay = true;
      rangeBarFnc()
      updateAll(currentIndex);
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
  superBtn1.classList.remove("fa-circle-play");
  superBtn1.classList.add("fa-circle-pause");
  superBtn2.classList.remove("fa-circle-play");
  superBtn2.classList.add("fa-circle-pause");
  upFooterBtn.classList.remove("fa-play");
  upFooterBtn.classList.add("fa-pause");
  audioElement.play();
}

function pauseFnc() {
  superBtn1.classList.remove("fa-circle-pause");
  superBtn1.classList.add("fa-circle-play");
  superBtn2.classList.remove("fa-circle-pause");
  superBtn2.classList.add("fa-circle-play");
  upFooterBtn.classList.remove("fa-pause");
  upFooterBtn.classList.add("fa-play");
  audioElement.pause();
}

function btnPlayPause() {
  let btns = [superBtn1, superBtn2, upFooterBtn];
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
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
  })
}

upFooterBtn.addEventListener("click", () => {
  if (isPlay) {
    btn.classList.remove("fa-pause");
    btn.classList.add("fa-play");
    audioElement.pause();
    setTimeout(() => {
      isPlay = false;
    }, 100)
  }
  else {
    btn.classList.remove("fa-play");
    btn.classList.add("fa-pause");
    audioElement.play();
    setTimeout(() => {
      isPlay = true;
    }, 100)
  }
})



function getBackHome() {
  songPage.style.display = "none";
  homePage.style.display = "flex";
  currentIndex = 0;
}
document.querySelector(".songPageBackBtn").addEventListener("click", getBackHome);
document.querySelector(".leftBox .iconBox .houseBtn").addEventListener("click", getBackHome);
document.querySelector(".footerCon .footer .houseBtn").addEventListener("click", getBackHome);
document.querySelector(".phoneSongPage .row .fa-angle-down").addEventListener("click", () => {
  phoneSongPage.style.display = "none";
  homePage.style.display = "noen";
  footerCon.style.display = "inline";
  songPage.style.display = "flex";
});


upFooterBtn.addEventListener("click", (e) => {
  if (isPlay) {
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    audioElement.pause();
    setTimeout(() => {
      isPlay = false;
    }, 100)
  }
  else {
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioElement.play();
    setTimeout(() => {
      isPlay = true;
    }, 100)
  }
});

const btns = Array.from(document.querySelectorAll(".btn"));
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    event.stopPropagation();
  })
})

document.querySelector(".upFooter").addEventListener("click", () => {
  homePage.style.display = "none";
  songPage.style.display = "none";
  footerCon.style.display = "none";
  phoneSongPage.style.display = "flex";

})
