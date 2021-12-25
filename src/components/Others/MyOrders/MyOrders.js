import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [control]);

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id)
    }

    return (
        <div>
            <Appbar></Appbar>
            <h1>My orders </h1>
            <div className="services m-5">
                <div className="row container">
                    {myOrders?.map((pd) => (
                        <div key={pd?._id} className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h4>{pd?.breed}</h4>
                                <h3>{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-dark"
                                >
                                    Cancel Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;