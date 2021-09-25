import React from 'react';
import './Artist.css'

const Artist = (props) => {
    console.log(props);
    const { img, name, Demand, age, profession, country } = props.artist;
    return (
        <div className="artist">
            <img src={img} alt="" />
            <div>
                <h4>Name:{name}</h4>
                <p>Country:{country}</p>
                <p>Age:{age}</p>
                <p>Profession:{profession}
                </p>
                <p>Demand:{Demand}</p>
                <button onClick={() => props.addToWishlist(props.artist)} className="added-btn">Add to wishList</button>
            </div>
        </div>
    );
};

export default Artist;