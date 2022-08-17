import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [tshirts, setTshirts] = useState([]);
    useEffect(()=>{
        fetch('/tshirts.json')
        .then(res => res.json())
        .then(data => setTshirts(data))
    })
    return [tshirts, setTshirts];
};

export default useHook;