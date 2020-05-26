import { useEffect, useContext } from "react";
import AppContext from "../contexts/app-context";

const SpotifyLogin = () => {
  const { tokenState } = useContext(AppContext);
  const [token, setToken] = tokenState;

  useEffect(() => {
    const currentUrl = window.location.hash.substring(1);
    const access_token = currentUrl
      ? currentUrl.split("&")[0].split("=")[1]
      : null;
    console.log(access_token);
    access_token ? setToken(access_token) : auth();
  }, []);

  const auth = () => {
    const urlBase = "https://accounts.spotify.com/authorize";
    const clientId = "e90df8285741458190413e878f1eaa7f";
    const redirectUri = encodeURIComponent("http://localhost:3000");
    const url = `${urlBase}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;
    window.location.href = url;
  };
};

export default SpotifyLogin;
