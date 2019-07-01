import React from 'react';
import './Product.scss'

const Product = (props) => {
    const { item } = props;
    return (
        <div className="product-container">
            <img src={ item && item.filePath } alt="상품 사진" className="product-img"/>
            <div>
                <span className="product-name">
                    { item && item.name }
                </span><br/>
                <span className="product-cost">
                    { item && item.cost }
                </span>
            </div>
        </div>
    );
};

export default Product;