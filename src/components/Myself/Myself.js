import React, { useContext } from 'react';
import { ProgrammingLangu } from '../Grandpa/Grandpa';
const Myself = ({house, spacial}) => {
    const value = useContext(ProgrammingLangu);
    return (
        <div>
            <h1>Myself page</h1>
            <p>House:{house}</p>
            <p>Spacial:{spacial}</p>
            <p>Programming: {value}</p>
        </div>
    );
};

export default Myself;