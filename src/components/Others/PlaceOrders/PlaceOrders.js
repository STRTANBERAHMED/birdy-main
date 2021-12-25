import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import './PlaceOrders.css';

const PlaceOrders = () => {
    const [product, setProduct] = useState({});
    const [control, setControl] = useState(false);
    const { productId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [control])

    console.log(product)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "pending";

        fetch("http://localhost:5000/confirmOrder", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        alert('Order Placed Successfully')
    }
    return (
        <div>
            <Appbar></Appbar>
            <div className="row container">
                <div className="col-md-6 my-5">
                    <div className="details-img">
                        <img className="w-75" src={product?.picture} alt="" />
                    </div>
                    <h2>{product?.name}</h2>
                    <h1> {product?.Breed}</h1>
                    <h1 className="text-danger"> {product?.price}$</h1>
                </div>
                <div className="orders col-md-6">
                    <h2>This is Information Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("username")}
                            defaultValue={user?.displayName}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("email")}
                            defaultValue={user?.email}
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("phoneNumber", { required: true })}
                            placeholder="Phone Number"
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("address", { required: true })}
                            placeholder="Address"
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("name")}
                            defaultValue={product?.name}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("date", { required: true })}
                            type="date"
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("breed", { required: true })}
                            defaultValue={product?.Breed}
                            className="p-2 m-2 w-50"
                        />

                        <select {...register("condition")} className="p-2 m-2 w-50">
                            <option value="premium">Normal</option>
                            <option value="classic">Best</option>
                        </select>

                        <input
                            {...register("price", { required: true })}
                            defaultValue={product?.price}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("image", { required: true })}
                            defaultValue={product?.picture}
                            className="p-2 m-2 w-50"
                        />

                        <input type="submit"
                            value="Order Now"
                            className="btn btn-dark w-25" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default PlaceOrders;