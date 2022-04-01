// import React, { useContext } from 'react';
// import { RingContext } from '../GrandPa/GrandPa';

import { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = () => {

    const ring = useContext(RingContext);

    return (
        <div>
            <h4>Special One</h4>

            <p>{ring}</p>
        </div>
    );
};

export default Special;