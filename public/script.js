const url = 'https://127.0.0.1:3000'
const route = '/getSong'

const apiRequest = async () => {
    const endpoint = url + route;
	let jsonResponse;
	try {
		const response = await fetch(endpoint, {cache: 'no-cache'});
		if (response.ok) {
		jsonResponse = await response.json();
		console.log(jsonResponse);
		}
	} catch(error) {
		console.log(error);
	}
	return jsonResponse;
}

const getSongData = async () => {
	let songData = await apiRequest();
	return songData;
}
const albumCover = document.getElementById("albumCover");
const audiosound = document.getElementById("audioSound");

const onPageLoad = async () => {
    let songs = await getSongData();
    let randomSong = songs[Math.floor(Math.random() * songs.le)];
    albumCover.src = randomSong.song
}