import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Favarites = () => {
    // const [playfav, setPlayfav] = useState(null);

    // useEffect(() => {
    //     APIKit.get("me/playlists").then(function (response) {
    //         setPlayfav(response.data.items);
    //         console.log(response.data.items)
    //     });
    // }, []);

    // const navigate = useNavigate();

    // const playPlaylist = (id) => {
    //     navigate("/player", { state: { id: id } });
    // };
    return (
        <div>
            Favarites
        </div>
    );
};

export default Favarites;