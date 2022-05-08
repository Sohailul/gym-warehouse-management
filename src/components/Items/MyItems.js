import React, { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `https://glacial-stream-19491.herokuapp.com/myitem?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `${email} ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://glacial-stream-19491.herokuapp.com/myitem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(myitem => myitem._id !== id)
                    setMyItems(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center mb-3 mt-5'>My Items: {myItems.length}</h2>
            <div className='d-flex justify-content-center align-items-center mb-5'>
                <div style={{ height: '3px', width: "100px", marginTop: "-30px" }} className='bg-primary'></div>
                <p className='px-2' style={{ marginTop: "-20px" }}><GoPrimitiveDot /></p>
                <div style={{ height: '3px', width: "100px", marginTop: "-30px" }} className='bg-primary'></div>
            </div>
            <div className='d-md-flex justify-content-md-end mb-3'>
                <Link to='/additems' className="btn d-flex justify-content-center align-items-center" style={{ backgroundColor: "#4B4C78", color: "#fff" }}><BsFillPlusCircleFill /> &nbsp;Add Item</Link>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL.</th>
                        <th scope="col">Items Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(myitem => <tr key={myitem._id}>
                            <th scope="row" className='count'></th>
                            <td>{myitem.name}</td>
                            <td>${myitem.price}</td>
                            <td>{myitem.quantity}</td>
                            <td>{myitem.supplier}</td>
                            <td>
                                <button onClick={() => handleDelete(myitem._id)}><BsFillTrashFill /></button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;