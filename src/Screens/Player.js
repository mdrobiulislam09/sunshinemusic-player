import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AudioPlayer from '../Component/AudioPlayer/AudioPlayer';
import Queue from '../Component/Queue/Queue';
import apiClient from '../Spotify';
import './Player.css';
import SongCard from './SongCard';

const Player = () => {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(currentTrack)


    // https://api.spotify.com/v1/playlists/{playlist_id}/tracks

    useEffect(() => {
        if (location.state) {
            apiClient
                .get("playlists/" + location.state?.id + "/tracks")
                .then((res) => {
                    console.log(res.data)
                    setTracks(res.data.items);
                    setCurrentTrack(res.data?.items[0]?.track);
                });
        }
    }, [location.state]);

    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
      }, [currentIndex, tracks]);


    return (
        <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
    );
};

export default Player;