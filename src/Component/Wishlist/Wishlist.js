import React from 'react';
import './Wishlist.css'

const Wishlist = (props) => {
    const cart = props.cart;
    let name = '';
    let demand = 0;
    let addedArtist = 0;
    for (const element of cart) {
        if (name.indexOf(element.name) === -1) {
            name = name + element.name + ',';
            demand = Number.parseInt(demand) + Number.parseInt(element.Demand);
            addedArtist = addedArtist + 1;
        }

    }
    return (
        <div className="wishlist">
            <h3>Whislist</h3><hr />
            <p>Added Artist: {addedArtist}</p>
            <ul> Artist name: <li>{name}</li> </ul>
            <p>Total of Artist demend:  {demand}Tk</p>
        </div>
    );
};

export default Wishlist;