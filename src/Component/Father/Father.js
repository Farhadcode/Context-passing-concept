import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';


const Father = () => {
    return (
        <div>
            <h2> father</h2>
            <div style={{ display: "flex" }}>
                <MySelf></MySelf>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;