import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const handleItemSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;

        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email, name, price, quantity, supplier, description }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            });

        const myurl = `http://localhost:5000/myitem`;
        fetch(myurl, {
            method: 'POST',
            body: JSON.stringify({ email, name, price, quantity, supplier, description }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            });

        toast('Item Added Successfully');
        e.target.reset();
    }
    return (
        <div className='row container'>
            <div className='col-md-6 col-sm-6 mx-auto mt-5 border p-3'>
                <h3 className='text-success text-center mb-5'>Add Items!</h3>
                <form onSubmit={handleItemSubmit}>
                    <div className="mb-3">
                        <input readOnly type="email" name="email" value={user.email} className="form-control" placeholder="Item Name" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Item Name" required />
                    </div>
                    <div className="mb-3">
                        <input type="number" name="price" className="form-control" placeholder="Item Price" required />
                    </div>
                    <div className="mb-3">
                        <input type="number" name="quantity" className="form-control" placeholder="Item Quantity" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="supplier" className="form-control" placeholder="Supplier Name" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="img" className="form-control" placeholder="Image Url" required />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" name="description" className="form-control" placeholder='Description'></textarea>
                    </div>
                    <button type="submit" className="btn w-100 d-block d-flex justify-content-center align-items-center" style={{ backgroundColor: "#4B4C78", color: "#fff" }}><BsFillPlusCircleFill /> &nbsp;Add Item</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddItems;