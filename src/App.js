import React, { useEffect } from 'react';
import './App.css';
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Login.js';
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      spotify.setAccessToken(_token);
    }
    console.log('I HAVE A TOKEN: ', token);
  }, );

  return (
    <div className="app">
      {
        token ? (
          <div> I am logged in </div>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
