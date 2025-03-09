console.log('Lets write JavaScript');
let currentSong = new Audio();
let songs;
let currFolder;
let filtered_songs = [];

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
// Here I also add attribute of filter = flase, it checks if the filter is true then it will only show the filtered songs which were searched by user
async function getSongs(folder,filter=false) {
 currFolder = folder;
  if (!filter) {
      // You can edit the url
    let a = await fetch(
      `/${folder}/`
    );
    let response = await a.text();
    
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let i = 0; i < as.length; i++) {
      const element = as[i];
      if (element.href.endsWith(".mp3")) {
        songs.push(element.href.split(`/${folder}/`)[1]);
      }
    }
    filtered_songs = songs;
  }
 


    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    // Replace songs to filtered_songs
    for (const song of filtered_songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                <div>Harry</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div> </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"


}

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)  
            // Replace songs to filtered_songs
            playMusic(filtered_songs[0])

        })
    })
}

async function main() {
    // Get the list of all the songs
    await getSongs("songs/ncs")
    playMusic(filtered_songs[0], true)

    // Display all the albums on the page
    await displayAlbums()


    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play.svg"
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event listener to previous
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

   // Add an event listener to next
  next.addEventListener("click", () => {
    // ? Here I also add replaced the songs to filtered_songs
    let index = filtered_songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index + 1 < filtered_songs.length) {
      playMusic(filtered_songs[(index + 1) % filtered_songs.length]);
    }
  });

   // Add an event to volume
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (event) => {
        // Now it is more readable and easy to understand
      currentSong.volume = parseInt(event.target.value) / 100;
    // If the song is muted and user increase or decrease the volume then it will be automatically unmute, this is good for ehancing UX
      currentSong.muted = false;
      document.querySelector(".volume img").src = "img/volume.svg";
    });

      // Add event to mute the track
    document.querySelector(".volume img").addEventListener("click", (event) => {
    if (currentSong.muted) {
      currentSong.muted = false;
        // If the user unmute the song, then the range of input will be automatically set to 100 and volume iamge appears
      document.querySelector(".volume img").src = "img/volume.svg";
      document.querySelector(".volume input[type=range]").value = 100;
    } else {
      currentSong.muted = true;
        // If the user mute the song, then the range of input will be automatically set to 0 and mute iamge appears
      document.querySelector(".volume img").src = "img/mute.svg";
      document.querySelector(".volume input[type=range]").value = 0;
    }
  });
     // Pause or play the music whenever the space button is clicked
  document.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
      event.preventDefault();
      if (currentSong.paused) {
        currentSong.play();
        play.src = "img/pause.svg";
      } else {
        currentSong.pause();
        play.src = "img/play.svg";
      }
    }
  });
      // Step 5 seconds forward or backwards the song when left or right arrow key is pressed
  document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight") {
      let percent = (currentSong.currentTime + 5) / currentSong.duration;
        // Also moving the circle of seek bar according to time
      document.querySelector(".circle").style.left = percent * 100 + "%";
      currentSong.currentTime = percent * currentSong.duration;
    } else if (event.code == "ArrowLeft") {
      let percent = (currentSong.currentTime - 5) / currentSong.duration;
        // Also moving the circle of seek bar according to time
      document.querySelector(".circle").style.left = percent * 100 - "%";
      currentSong.currentTime = percent * currentSong.duration;
    }
  });

    // I'll also add the search input in html and will also add it's css
  search.addEventListener("keyup", async (event) => {
    filtered_songs = songs.filter((song) =>
      song.toLowerCase().includes(event.target.value.toLowerCase())
    );
    await getSongs(currFolder, (filter = true));
  });





}

main() 
