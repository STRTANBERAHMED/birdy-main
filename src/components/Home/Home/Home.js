import React from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Available from '../Available/Available';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Header></Header>
            <Products></Products>
            <Available></Available>
            <Footer></Footer>
        </div>
    );
};

export default Home;