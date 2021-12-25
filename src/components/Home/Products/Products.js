import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';


const Products = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])

    return (
        <div>
            <div className="m-5">
                <div className="text-center">
                    <h1>Pigeons</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                    {
                        items.map(item => <Collection
                            key={item._id}
                            item={item}
                        ></Collection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;