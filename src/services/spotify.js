const getUrl = async (endpoint, token) => {
  const url = `https://api.spotify.com/v1/${endpoint}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

const getArtist = async (id, token) => await getUrl(`artists/${id}`, token);

const getArtists = async (id, token) =>
  await getUrl(`search?q=${id}&type=artist`, token);

const getAlbum = async (id, token) => await getUrl(`albums/${id}`, token);

const getAlbums = async (id, token) =>
  await getUrl(`artists/${id}/albums`, token);

const getAlbumTracks = async (id, token) =>
  await getUrl(`albums/${id}/tracks`, token);

export { getArtist, getArtists, getAlbum, getAlbums, getAlbumTracks };
