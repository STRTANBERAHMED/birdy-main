import React from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;