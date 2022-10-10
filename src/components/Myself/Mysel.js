import React from 'react';
import Special from '../Special/Special';

const Mysel = ({ house }) => {
    return (
        <div>
            <h2>My Self</h2>
            <p><small>House: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Mysel;