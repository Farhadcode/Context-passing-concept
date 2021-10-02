import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Wife = () => {
    const [ornaments, house] = useContext(RingContext);

    return (

        <div>
            <h3>Speccile one</h3>
            <small>Gift : {ornaments}</small>
            <br />
            <small> House : {house}</small>
        </div>
    );
};

export default Wife;