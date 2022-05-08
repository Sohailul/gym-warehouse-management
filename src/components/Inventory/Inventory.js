import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);



    useEffect(() => {
        const url = `https://evening-tundra-29985.herokuapp.com/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                //setQuantity(data.quantity);
            });
    }, [quantity]);

    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity) - 1;
        const updatedData = { quantity: newQuantity };

        const url = `https://evening-tundra-29985.herokuapp.com/item/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    //console.log('Success', data);
                    toast("Quantity Delivered Successfully");
                    setQuantity(newQuantity);
                }
            });
    }

    const handleQuantity = event => {
        event.preventDefault();
        const quantity = parseInt(item.quantity) + parseInt(event.target.newQuantity.value);
        const newQuantity = { quantity: quantity };

        const url = `https://evening-tundra-29985.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newQuantity),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                toast("Quantity Updated Successfully");
                event.target.reset();
                setQuantity(quantity);
            });
    }


    return (
        <div className='container mx-auto'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className='col-sm-12 col-md-8'>
                    <div className="d-flex justify-content-center align-items-center zoom">
                        <img src={item.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Id: {item._id}</h5>
                            <h5 className="card-title">Name: {item.name}</h5>
                            <h6 className="card-title">Price: ${item.price}</h6>
                            <h6 className="card-title">Quantity: {item.quantity}</h6>
                            <h5 className="card-title">Supplier: {item.supplier}</h5>
                            <p className="card-text">{item.description}</p>
                            <button onClick={handleDelivered} className='btn mb-3 btn-lg btn-block w-100' style={{ backgroundColor: "#4B4C78", color: "#fff" }}>Delivered</button>
                            <div className='restock-form'>
                                <form onSubmit={handleQuantity}>
                                    <div className="mb-3">
                                        <input type="number" className="form-control" name="newQuantity" placeholder="Restock the Items" required />
                                    </div>
                                    <input type="submit" value="Update Stock" style={{ backgroundColor: "#4B4C78", color: "#fff", padding: "15px" }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Inventory;