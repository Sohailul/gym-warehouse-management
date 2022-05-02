import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, img, price, quantity, supplier, description } = item;
    return (
        <div className='col-sm-12 col-md-4 d-flex justify-content-center'>
            <div className="card" style={{ width: "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: ${price}</h6>
                    <h6 className="card-title">Quantity: {quantity}</h6>
                    <h5 className="card-title">Supplier: {supplier}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="/" className="btn d-block" style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Stock Update</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;