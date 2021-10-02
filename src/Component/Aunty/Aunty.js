import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty </h3>
            <p> Gift:{ornaments}</p>
            <p>House:{house}</p>
        </div>
    );
};

export default Aunty;