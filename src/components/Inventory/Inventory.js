import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const Inventory = () => {
    const { id } = useParams();
    const [items, setItems] = useItems();

    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setItems(data));

    return (
        <div className='container mx-auto'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className='col-sm-12 col-md-8'>
                    <div className="d-flex justify-content-center align-items-center zoom">
                        <img src={items.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Id: {items._id}</h5>
                            <h5 className="card-title">Name: {items.name}</h5>
                            <h6 className="card-title">Price: ${items.price}</h6>
                            <h6 className="card-title">Quantity: {items.quantity}</h6>
                            <h5 className="card-title">Supplier: {items.supplier}</h5>
                            <p className="card-text">{items.description}</p>
                            <button className='btn mb-3 btn-lg btn-block w-100' style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Delivered</button>
                            <div className='restock-form'>
                                <form>
                                    <div className="mb-3">
                                        <input type="number" className="form-control" name="quantity" placeholder="Restock the Items" required />
                                    </div>
                                    <button className='btn' style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Restock</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;