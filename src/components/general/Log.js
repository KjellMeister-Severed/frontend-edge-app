import React from 'react';

const Log = (props) => {
    return (
        <p className={"border-b-2 text-gray-400 border-b-gray-400 py-1 border-dashed"}>{props.description}</p>
    );
};

export default Log;