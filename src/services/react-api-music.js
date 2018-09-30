const apiURL = "https://react-api-lab.herokuapp.com/";
//get artist
export const getArtist = idArtist => {
  return fetch(`${apiURL}artists/${idArtist}`).then(response =>
    response.json()
  );
};
//get all artists
export const getAllArtists = () => {
  console.log("Obteniendo todos los artistas");
};
//get album artist
export const getAlbum = idAlbum => {
  return fetch(`${apiURL}albums/${idAlbum}`).then(response => response.json());
};
//get playList
export const getPlayList = idPlayList => {
  return fetch(`${apiURL}playlists/${idPlayList}`).then(response =>
    response.json()
  );
};

//search artist
export const getSearchArtist = searchArtist => {
  return fetch(`${apiURL}search?query=${searchArtist}`).then(response =>
    response.json()
  );
};
//post playList
export const postPlayList = (idPlayList, track) => {
  return fetch(`${apiURL}playlists/${idPlayList}`, {
    method: "post",
    body: track,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
