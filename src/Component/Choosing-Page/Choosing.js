import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Wishlist from '../Wishlist/Wishlist';
import './Choosing.css'

const Choosing = () => {
    const [cart, setCart] = useState([]);
    const [artists, setArtist] = useState([]);
    useEffect(() => {
        fetch('./artists.JSON').then(res => res.json()).then(data => setArtist(data));
    }, []);
    const addToWishlist = (artist) => {
        const newCart = [...cart, artist];
        setCart(newCart);
    }
    return (
        <div className="choosing-page">
            <div className="artists">
                {
                    artists.map(artist => <Artist key={artist.name} addToWishlist={addToWishlist} artist={artist}></Artist>)
                }
            </div>
            <div>
                <Wishlist cart={cart}></Wishlist>
            </div>
        </div>
    );
};

export default Choosing;