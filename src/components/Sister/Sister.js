import React from 'react';

const Sister = (props) => {
    const { house } = props;
    return (
        <div>
            <h4>sister</h4>
            <p>House:{house}</p>
        </div>
    );
};

export default Sister;