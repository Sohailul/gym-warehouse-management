import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5 mb-3 text-center'>Our Available Items</h2>
            <div className='row gy-3 d-flex justify-content-center'>
                {
                    items.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;