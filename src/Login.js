import React, { useEffect, useState } from 'react';
import './Login.css';
import { loginUrl } from './spotify';
import { generateRandomString, generateCodeChallenge } from './spotify';

function Login() {
  const [codeChallenge, setCodeChallenge] = useState(null);
  
  useEffect(() => {
    var codeVerifier = generateRandomString(128);
    
    generateCodeChallenge(codeVerifier).then(codeChallenge => {
      setCodeChallenge(codeChallenge);
    });
    
  }, [codeChallenge]);
  
  const handleClick = () => {
    window.location.replace(loginUrl + codeChallenge)
   
  }
  
  return (
    <div className="login">
        <img 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
          width={500} 
          height={150} 
          alt=""
        />
        <button onClick={handleClick}>LOGIN WITH SPOTIFY</button>
    </div>
  )
}

export default Login