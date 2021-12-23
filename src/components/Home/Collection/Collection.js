import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Collection = (props) => {
    const { _id, name, picture, Breed, price } = props.item || {}

    // const history = useHistory()

    // const handleDetails = (_id) => {
    //     const uri = `/PlaceOrders/${_id}`
    //     history.push(uri)
    // }

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
                    <NavLink to={`/projects/${_id}`}>
                        <Button className="link-button my-4" variant="dark">
                            Order Now
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Collection;