import React, { useEffect, useState } from 'react';
import SideBarButton from '../SideBarButton/SideBarButton';
import './SideBar.css';
import { MdFavorite } from 'react-icons/md';
import { TbPlayerPlay } from 'react-icons/tb';
import { MdOutlineLogout } from 'react-icons/md';
import { IoLibrarySharp } from 'react-icons/io5';
import { SiTrendmicro } from 'react-icons/si';
import { ImFeed } from 'react-icons/im';
import apiClient from '../../Spotify';

const SideBar = () => {
    const [image, setImage] = useState(
        "https://w7.pngwing.com/pngs/95/768/png-transparent-musical-note-staff-musical-theatre-musical-notes-text-magenta-music-download-thumbnail.png"
      );
      useEffect(() => {
        apiClient.get("me").then((res) => {
          setImage(res.data.images[0].url);
        console.log(res.data.images[0].url)
        });
      }, []);

    return (
        <div className='sideBar-container'>
            <img
                src={image}
                alt="Nature"
                className="profile-image">
            </img>
            <div>
                <SideBarButton title="Feed" to="/feed" icon={<ImFeed></ImFeed> }></SideBarButton>
                <SideBarButton title="Trending" to="/trending" icon={<SiTrendmicro></SiTrendmicro> }></SideBarButton>
                <SideBarButton title="Player" to="/player" icon={ <TbPlayerPlay></TbPlayerPlay> }></SideBarButton>
                <SideBarButton title="Favorite" to="/favarites" icon={<MdFavorite></MdFavorite>}></SideBarButton>
                <SideBarButton title="Library" to="/" icon={ <IoLibrarySharp></IoLibrarySharp>}></SideBarButton>
            </div>
            <SideBarButton title="Log Out" to="/logout" icon={<MdOutlineLogout></MdOutlineLogout> }></SideBarButton>
        </div>
    );
};

export default SideBar;