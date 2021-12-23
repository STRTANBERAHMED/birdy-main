import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer p-5 text-dark">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Address</h3>
                        <p>Baris Mahalle, Safranbolu, Turkey</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Phone</h3>
                        <p>7946-5123</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Email</h3>
                        <p>birdy@world.com</p>
                    </div>
                </div>
            </div>
            <p>©2021. Birdy. All rights reserved.</p>
        </div>
    );
};

export default Footer;