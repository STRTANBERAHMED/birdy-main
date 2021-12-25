import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {

    // destructuring
    const { _id, name, Breed, picture, price } = props.item || {}


    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{Breed}</p>
                        <p className="card-text">{price}$</p>
                    </div>
                    <Link to={`/placeOrders/${_id}`}>
                        <Button className="link-button my-4" variant="dark">
                            Order Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;