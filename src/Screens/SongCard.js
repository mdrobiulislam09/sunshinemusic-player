import React from 'react';
import AlbumInfo from './AlbumInfo';
import AlbumImage from './AlbumImage';
import './SongCard.css';

const SongCard = ({album}) => {
    return (
        <div className="songCard-body flex">
            <AlbumImage url={album?.images[0]?.url}></AlbumImage>
            <AlbumInfo  album={album}></AlbumInfo>
      {/* <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} /> */}
    </div>
    );
};

export default SongCard;