import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import './Choosing.css'

const Choosing = () => {
    const [cart, setCart] = useState([]);
    const [artists, setArtist] = useState([]);
    useEffect(() => {
        fetch('./artists.JSON').then(res => res.json()).then(data => setArtist(data));
    }, []);
    const addToWishlist = (artist) => {
        console.log(artist);
    }
    return (
        <div className="choosing-page">
            <div className="artists">
                {
                    artists.map(artist => <Artist key={artist.name} addToWishlist={addToWishlist} artist={artist}></Artist>)
                }
            </div>
            <div>
                <h3>Whislist</h3>
                <p> Artist name:</p>
                <p> Artist demend:</p>
            </div>
        </div>
    );
};

export default Choosing;