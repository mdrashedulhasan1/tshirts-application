import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css';
const Father = ({house, spacial}) => {
    return (
        <div>
            <h1>Father</h1>
            <p>House:{house}</p>
            <div className='father-container'>
                <Myself house={house} spacial={spacial}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;