import React from 'react';
import Log from "./Log";

const Logs = () => {
    return (
        <div className={"code scrollbar-hide w-11/12 bg-gray-700 font-mono mx-auto mt-4 h-5/6 border border-gray-600 p-4 rounded-xl h-72 overflow-y-scroll"}>
                <Log time={"19:12:11"} description={"Gate Opened"}/>
                <Log time={"19:14:11"} description={"Gate Closed"}/>
        </div>
    );
};

export default Logs;