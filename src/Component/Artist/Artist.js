import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import './Artist.css'

const Artist = (props) => {
    const { img, name, Demand, age, profession, country } = props.artist;
    const element = <FontAwesomeIcon icon={faIdCardAlt} />
    return (
        <div className="artist">
            <img src={img} alt="" />
            <div className="intro">
                <h4><span>Name:</span> {name}</h4>
                <p><span>Country:</span> {country}</p>
                <p><span>Age:</span> {age}</p>
                <p><span>Profession:</span> {profession}
                </p>
                <p><span>Demand:</span> {Demand}TK</p>
                <button onClick={() => props.addToWishlist(props.artist)} className="added-btn">{element} Add to wishList</button>
            </div>
        </div>
    );
};

export default Artist;