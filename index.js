const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title:"Defensora Pública - Especialista em direito de famíia",
    artist: "Yasmin Iarto",
    cover: "files/direito-faa.jpg",
    file: "files/Yasmin-iarto.mp3"
  };

  cover.style.background = `url('${data.cover}') no-repeat center center / cover` 
 title.innerText = data.title 
  artist.innerHTML = `<i class='material-icons'>account_circle</i> ${data.artist}`
  audio.src = data.file
  