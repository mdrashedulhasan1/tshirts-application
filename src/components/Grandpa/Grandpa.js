import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
const Grandpa = () => {
    const house = 10;
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>House:{house}</p>
            <div className='grandpa-container'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;