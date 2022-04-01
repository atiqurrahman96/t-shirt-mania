import React from 'react';

const Myself = (props) => {
    const { house, special } = props;
    return (
        <div>
            <h4>Me</h4>
            <p>House:{house} special={special}</p>
        </div>
    );
};

export default Myself;