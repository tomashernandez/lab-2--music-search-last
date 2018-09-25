const apiURL = "https://react-api-lab.herokuapp.com/";
//get artist
export const getArtist = idArtist => {
  console.log(`Recibo ID desde la API Class : ${idArtist}`);
  return fetch(`${apiURL}artists/${idArtist}`).then(response =>
    response.json()
  );
};
//get all artists
export const getAllArtists = () => {
  console.log("Obteniendo todos los artistas");
};
//get album artist
export const getAlbumArtist = idArtist => {};
//search artist
export const getSearchArtist = searchArtist => {};
//post playList
export const postPlayList = idPlayList => {};
