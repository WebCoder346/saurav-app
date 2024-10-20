let plstBoxes = [];
let songBoxes = [];
let searchBoxes = [];
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
const pages = document.querySelectorAll(".page");
const songBoxCon = document.querySelector(".songBoxCon");
const songPageImg = document.querySelector(".songPage .topBox img");

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
      pages.forEach(page => {
        page.style.display = "none";
        document.querySelector(".songPage").style.display = "flex";
        makeSongPage(freshData[index].type, index, freshData);
      })
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
  let todayBoxes = document.querySelectorAll(".todayBox");
  todayBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      makeSongPage(todayData[index].type, index, todayData);
    })
  })
}



// on clicking playlist boxes
function getPlstIndex() {
  const playlistBoxes = document.querySelectorAll(".plstBoxes");
  playlistBoxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      makeSongPage(playlist[index].type, index, playlist);
    })
  })
}
getPlstIndex()

function makeSongPage(plstType, plstIndex, dataName) {
  pages.forEach(page => {
    page.style.display = "none";
    document.querySelector(".songPage").style.display = "flex";
  })
  songBoxes = [];
  songBoxCon.innerHTML = "";
  document.querySelector(".songPageNav span").textContent = dataName[plstIndex].title;
  document.querySelector(".songInfoCon h1").textContent = dataName[plstIndex].title;
  document.querySelector(".songPage .topBox img").src = dataName[plstIndex].image || dataName[plstIndex].imgSrc;
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

function getBackHome() {
  pages.forEach(page => {
    page.style.display = "none";
    document.querySelector(".homePage").style.display = "flex";
  })
  currentIndex = 0;
}
document.querySelector(".songPageBackBtn").addEventListener("click", getBackHome);
document.querySelector(".leftBox .iconBox .houseBtn").addEventListener("click", getBackHome);
document.querySelector(".footerCon .footer .houseBtn").addEventListener("click", getBackHome);
document.querySelector(".phoneSongPage .row .fa-angle-down").addEventListener("click", () => {
  pages.forEach(page => {
    page.style.display = "none";
    footerCon.style.display = "inline";
    songPage.style.display = "flex";
  })
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
  pages.forEach(page => {
    page.style.display = "none";
    footerCon.style.display = "none";
    phoneSongPage.style.display = "flex";
  })
});


screen resize funcanalioty
  document.querySelector(".alertBox .x").addEventListener("click", () => {
    document.querySelector(".alertBox").style.display = "none";
    document.querySelector(".body").style.filter = "none";
  })
  document.querySelector(".alertBox button").addEventListener("click", () => {
    changeScreen();
    document.querySelector(".alertBox").style.display = "none";
    document.querySelector(".body").style.filter = "none";
})
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  function changeScreen() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (!document.fullscreenElement) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "f") {
      changeScreen();
    }
  });


  window.onload = function() {
    history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
      event.preventDefault(); // Stop default behavior
      var userResponse = confirm("Are you sure you want to quit listning musics 🎶?");
      if (userResponse) {
        history.back(); // Allows the back navigation
      } else {
        // If not, push the state again to prevent back navigation
        history.pushState(null, null, window.location.href);
      }
    };
  };




// // // // // // // // // // Search Page // // // // // // // // // // /

document.querySelectorAll(".searchPageBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    pages.forEach(page => {
      page.style.display = "none";
      document.querySelector(".searchPage").style.display = "flex";
      document.querySelector(".searchHomePage").style.display = "flex";
      document.querySelector(".searchAreaPage").style.display = "none";
    })
  });
})

for (let i = 0; i < browsingData.length; i++) {
  const browsingBox = document.createElement("div");
  browsingBox.classList.add("browsingBox");
  browsingBox.classList.add("notAvailable");
  const titlePara = document.createElement("p");
  const image = document.createElement("img");
  titlePara.textContent = browsingData[i].title;
  image.src = browsingData[i].imgSrc;
  browsingBox.style.background = `${browsingData[i].background}`;
  browsingBox.appendChild(titlePara);
  browsingBox.appendChild(image);
  document.querySelector(".browsingCon").appendChild(browsingBox);
}
document.querySelectorAll(".browsingBox").forEach(box => {
  box.addEventListener("click", () => {
    pages.forEach(page => page.style.display = "none");
    document.querySelector(".libraryPage").style.display = "flex";
  })
})
document.querySelector(".searchPage .inputBox").addEventListener("click", () => {
  pages.forEach(page => {
    page.style.display = "none";
    document.querySelector(".searchHomePage").style.display = "none";
    document.querySelector(".searchPage").style.display = "flex";
    document.querySelector(".searchAreaPage").style.display = "flex";
    document.querySelector(".searchAreaPage .topRow .searchBox").focus();
  })
})
document.querySelector(".searchPage .searchAreaPage .topRow i").addEventListener("click", () => {
  pages.forEach(page => {
    page.style.display = "none";
    document.querySelector(".searchAreaPage").style.display = "none";
    document.querySelector(".searchHomePage").style.display = "flex";
    document.querySelector(".searchPage").style.display = "flex";
  })
})


// recent song functionality
function searchSongBoxes(i, data) {
  const recentSongBox = document.createElement('div');
  recentSongBox.classList.add('recentSongBox');
  const flexDiv = document.createElement('div');
  flexDiv.style.display = 'flex';
  const img = document.createElement('img');
  img.src = data[i].image;
  const songInfoBox = document.createElement('div');
  songInfoBox.classList.add('songInfoBox');
  const songTitle = document.createElement('p');
  songTitle.classList.add("searchSongTitle");
  songTitle.textContent = data[i].title;
  const artistName = document.createElement('span');
  artistName.textContent = data[i].artist;
  songInfoBox.appendChild(songTitle);
  songInfoBox.appendChild(artistName);
  flexDiv.appendChild(img);
  flexDiv.appendChild(songInfoBox);
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-xmark');
  recentSongBox.appendChild(flexDiv);
  recentSongBox.appendChild(closeIcon);
  document.querySelector(".recentSongCon").appendChild(recentSongBox);
  searchBoxClick();
}
for (let i = 0; i < data.length; i++) {
  searchSongBoxes(i, data);
}
// on searchBoxClick
function searchBoxClick() {
  const boxes = document.querySelectorAll(".recentSongBox");
  boxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      allSongs = [];
      currentIndex = index;
      allSongs.push(data);
      let songs = allSongs[0];
      const title = document.querySelectorAll(".searchSongTitle");
      title.forEach(pa => {
        pa.style.color = "white";
      })
      title[index].style.color = "#21D801";
      console.log(title[index].textContent)

      data.forEach(obj => {
        if (obj.title == title[index].textContent) {
          audioElement.src = obj.song;
          audioElement.play();
          isPlay = true;
          playFnc();
          document.querySelectorAll(".songImages").forEach(songImg => {
            songImg.src = obj.image;
          })
          document.querySelectorAll(".songNames").forEach(songName => {
            songName.textContent = obj.title;
          })
          document.querySelectorAll(".artistNames").forEach(artistName => {
            artistName.textContent = obj.artist;
          })
        }
      })


    })
  })
}



// search on input functionality

document.querySelector(".searchAreaPage .topRow .searchBox").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const results = data.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  showSearchResult(results, query)
})

function showSearchResult(results, query) {
  if (results.length > 0) {
    document.querySelector(".recentSongCon").innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      searchSongBoxes(i, results);
    }
  } else {
    document.querySelector(".recentSongCon").innerHTML = `<p class='notFound'>Not Found: " ${query} "<p>`;
  }
}


// // // // // // // // // // Library Page // // // // // // // // // // 

document.querySelectorAll(".libraryPageBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    pages.forEach(page => {
      page.style.display = "none";
    })
    document.querySelector(".libraryPage").style.display = "flex";
  })
})

for (let i = 0; i < libraryBoxData.length; i++) {
  const libraryBox = document.createElement('div');
  libraryBox.className = 'libraryBox';
  const img = document.createElement('img');
  img.src = libraryBoxData[i].imgSrc;
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  const artistName = document.createElement('p');
  artistName.textContent = libraryBoxData[i].title;
  const artistRole = document.createElement('span');
  artistRole.textContent = 'Artist';
  infoDiv.appendChild(artistName);
  infoDiv.appendChild(artistRole);
  libraryBox.appendChild(img);
  libraryBox.appendChild(infoDiv);
  document.querySelector(".libraryBoxCon").appendChild(libraryBox);
}

document.querySelectorAll(".libraryBox").forEach((box, index) => {
  box.addEventListener("click", () => {
    pages.forEach(page => page.style.display = "none");
    songPage.style.display = "flex";
    songBoxCon.innerHTML = "";
    songPageImg.style.width = "auto";
    songPageImg.src = libraryBoxData[index].imgSrc;
    makeSongPage(libraryBoxData[index].type, index, libraryBoxData)
  })
})

document.querySelector(".favouriteBox").addEventListener("click", () => {
  pages.forEach(page => page.style.display = "none");
  songPage.style.display = "flex";
  songBoxCon.innerHTML = "";
  songPageImg.style.width = "auto";
  songPageImg.src = likeSongData[0].imgSrc;
  makeSongPage(likeSongData[0].type, 0, likeSongData)
})
