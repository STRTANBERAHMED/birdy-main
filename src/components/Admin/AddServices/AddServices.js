import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://pacific-lowlands-99933.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="">
            <div className="add-service">
                <h2>Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Bird Name" required />
                    <input {...register("Breed")} placeholder="Breed" required />
                    <input type="number" {...register("price")} placeholder="Price" required />
                    <input {...register("picture")} placeholder="Picture url" required />
                    <input type="submit"
                        value="Add Now"
                        className="btn btn-dark w-25" />
                </form>
            </div>
        </div>
    );
};

export default AddService;