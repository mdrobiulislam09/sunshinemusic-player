import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favarites from './Favarites';
import Feed from './Feed';
import Library from './Library';
import Player from './Player';
import Trending from './Trending';
import './Home.css';
import SideBar from '../Component/SideBar/SideBar';
import Login from './Login/Login';
import { setClientToken } from '../Spotify';

const Home = () => {
    const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return  !token ? (<Login></Login>) : (
        <Router>
            <div className='main-body'>
                <SideBar></SideBar>
                <Routes>
                    <Route path='/' element={<Library></Library>}></Route>
                    <Route path='/feed' element={<Feed></Feed>}></Route>
                    <Route path='/trending' element={<Trending></Trending>}></Route>
                    <Route path='/player' element={<Player></Player>}></Route>
                    <Route path='/favarites' element={<Favarites></Favarites>}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default Home;