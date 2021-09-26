import React from 'react';

const Wishlist = (props) => {
    console.log(props.cart)
    const cart = props.cart;
    let name = '';
    let demand = 0;
    for (const element of cart) {
        if (name !== element.name) {
            name = name + element.name + ',';
        }
        demand = Number.parseInt(demand) + Number.parseInt(element.Demand);
    }
    return (
        <div>
            <h3>Whislist</h3>
            <p> Artist name:{name}</p>
            <p> Artist demend: {(demand)}</p>
        </div>
    );
};

export default Wishlist;