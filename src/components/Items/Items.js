import React, { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://glacial-stream-19491.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5 mb-3 text-center'>Our Available Items</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '3px', width: "100px", marginTop: "-30px" }} className='bg-primary'></div>
                <p className='px-2' style={{ marginTop: "-20px" }}><GoPrimitiveDot /></p>
                <div style={{ height: '3px', width: "100px", marginTop: "-30px" }} className='bg-primary'></div>
            </div>
            <div className='row gy-3 d-flex justify-content-center'>
                {
                    items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;