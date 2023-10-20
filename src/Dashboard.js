import React, { useState, useEffect } from 'react'
import Header from './Header';
import './Dashboard.css'
import DashboardDisplay from './DashboardDisplay';
import AlbumDisplay from './AlbumDisplay';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDataLayerValue } from "./DataLayer";
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Dashboard({ spotify }) {
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [{ token }, dispatch] = useDataLayerValue();

    const handleLogout = () => {
      dispatch({
        type: "SET_TOKEN",
        token: null,
      })
    }

    useEffect(() => { 
        spotify.getMyTopArtists().then((artists) => {
            setTopArtists(artists.items);
            console.log(artists.items);
         }, (err) => {
           console.log('Error:', err);
       })   

       spotify.getMyTopTracks().then((tracks) => {
            setTopTracks(tracks.items);
            console.log(tracks.items);
         }, (err) => {
           console.log('Error:', err);
       })   
    }, [])
    
  return (
    <div className="dashboard">
        <Grid container direction='row' alignItems="center" justifyContent="center">
          <Typography variant="h4">Your Spotify Top</Typography>
          <Button item onClick={handleLogout} sx={{ marginLeft: "auto" }}>Log out</Button>
        </Grid>
        <Divider variant="fullWidth"></Divider>
        <Header category="Artists"/>
        <AlbumDisplay top3List={topArtists.slice(0,3)}></AlbumDisplay>
        <DashboardDisplay data={topArtists} category="Artists"/>
        <Header category="Tracks"/>
        <DashboardDisplay data={topTracks} category="Tracks"/>
    </div>
  )
}

export default Dashboard