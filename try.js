

let searchInput = document.getElementById("searchInput");
let result = 0;
let apiData;

const getData = async () => {
document.getElementById("root").innerHTML = `<div class="lds-hourglass"></div>`  

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: {
    q: searchInput.value
    
  },
  headers: {
    'X-RapidAPI-Key': '011dd5ddddmsh6304aef7d4a65a7p1ecde3jsn9c4d5bca7b5a',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

try {
    
	const { data }  = await axios.request(options);
  document.getElementById("root").innerHTML = ``;
  apiData = data;
 updateInterface();


} catch (error) {
	console.error(error);
}}

document.getElementById('next').addEventListener('click', () => {
  result++;
  console.log(result);
  updateInterface();
});


function updateInterface () {
  console.log(apiData.data[result]);
  document.getElementById('artist-img').innerHTML = `<img src="${apiData.data[result].artist.picture_medium}"> `
  document.getElementById('artist-name').textContent = apiData.data[result].artist.name;
  document.getElementById('song-title').textContent = apiData.data[result].title;
  document.getElementById('album-title').textContent = apiData.data[result].album.title;
  document.getElementById('player').innerHTML = `<audio controls id="myAudio" ><source type="audio/mp3" src="${apiData.data[result].preview}"/>< /audio>`
  const myAudio = document.getElementById('myAudio');
  myAudio.onplay = function() {
    const playerContainer = document.querySelector('.player-container');
    playerContainer.classList.add('player-container-play');
  };

  myAudio.onpause = function() {
    const playerContainer = document.querySelector('.player-container');
    playerContainer.classList.remove('player-container-play');
  }
  
}


document.getElementById("form").addEventListener('submit', (e) => {
  e.preventDefault();
  getData();
})



// -----------------------------------------------------------------------------------------


const heartChange = document.querySelector(".heart-box > svg path");

heartChange.addEventListener("click", () => {
  console.log('heart')
  heartChange.style.fill = '#eb34a1';
  
});


console.log(heartChange);

























