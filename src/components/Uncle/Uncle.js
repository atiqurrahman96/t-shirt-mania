import React from 'react';

const Uncle = (props) => {
    const { house } = props;
    return (
        <div>
            <h4>Uncle</h4>
            <p>House: {house}</p>
        </div>
    );
};

export default Uncle;