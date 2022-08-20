import React, { createContext, useState} from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
export const ProgrammingLangu = createContext('programming');
const Grandpa = () => {
    const [house,setHouse] = useState(5);
    const handleAddHouse = ()=>{
        const newHouse = house + 1;
        setHouse(newHouse);
    };
    const spacial = 'Book';
    const programmingLangu = "JavaScript";
    return (
           <ProgrammingLangu.Provider value={programmingLangu}>
             <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>House: {house} <button onClick={handleAddHouse}>House Add</button></p>
            <div className='grandpa-container'>
                <Father house={house} spacial={spacial}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
           </ProgrammingLangu.Provider>
    );
};

export default Grandpa;