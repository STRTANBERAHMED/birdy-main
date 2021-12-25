import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Available.css';

const Available = () => {
    // font awesome
    const pigeon = <FontAwesomeIcon icon={faDove} />
    const breeds = <FontAwesomeIcon icon={faDove} />
    const user = <FontAwesomeIcon icon={faUser} />
    const earth = <FontAwesomeIcon icon={faGlobe} />
    return (
        <div className="available">
            <div className="container">
                <div className="count row p-4 mt-5">
                    <div className="p-2 col-md-3 text-center">
                        <h2>{pigeon}</h2>
                        <h1>2624</h1>
                        <p>Pigeons in stock</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{breeds}</h2>
                        <h1>60</h1>
                        <p>Breeds</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{user}</h2>
                        <h1>4643</h1>
                        <p>HAPPY CUSTOMER REVIEWS</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{earth}</h2>
                        <h1>20</h1>
                        <p>Pigeon Collection Countries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;