import React from 'react';
import Product from "../Product";
import './Home.scss';

const SideMenu = (props) => {
    const {title, products} = props;
    return (
        <div>
            <span className="menu-title">{ title }</span><br/>
            { products && products.map(product => <Product item={ product }/>) }
        </div>
    );
};

export default SideMenu;