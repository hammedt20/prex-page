import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';
import Header from './header';
import Footer from './Footer'
import './styles.css';

ReactDom.render (
    <>
        <Header />
        <Main />
        <Footer />
    </>, 
    document.getElementById('root'));