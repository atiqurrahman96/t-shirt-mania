import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'
export const RingContext = createContext('ring')
const GrandPa = () => {
    const ornament = 'Dimond ring2 '
    const [house, setHouse] = useState(1);
    const handleBuyAHome = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grand Pa</h4>
                <p>House:{house}</p>
                <button onClick={handleBuyAHome}>Buy A Home</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;