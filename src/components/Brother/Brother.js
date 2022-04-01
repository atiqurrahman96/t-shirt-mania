import React from 'react';

const Brother = (props) => {
    const { house } = props;
    return (
        <div>
            <h4>Brother</h4>
            <p>House={house}</p>
        </div>
    );
};

export default Brother;