import React from 'react';
import './Wishlist.css'

const Wishlist = (props) => {
    // setting name and quantity;
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
        // wish list section;
        <div className="wishlist">
            <h3>Whislist</h3><hr />
            <p>Added Artist: <span>{addedArtist}</span></p>
            <p> Artist name: <span>{name}</span> </p>
            <p>Total of Artist demend:  <span>{demand}Tk</span></p>
        </div>
    );
};

export default Wishlist;