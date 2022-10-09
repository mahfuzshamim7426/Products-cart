import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handleAddTocart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button className='tshirt-btn' onClick={() => handleAddTocart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;