import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Product from '../Product/Product';

const AllProducts = () => {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://pacific-lowlands-99933.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Appbar></Appbar>
            <div className="m-5">
                <div className="text-center">
                    <h1>Pigeons</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                    {
                        Products.map(item => <Product
                            key={item._id}
                            item={item}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;