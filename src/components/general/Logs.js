import React, {useCallback, useContext, useEffect, useState} from 'react';
import Log from "./Log";
import {SocketContext} from "../context";
import { uuid } from 'uuidv4';

const Logs = () => {
    const socket = useContext(SocketContext);
    const [logs, setLogs] = useState([])

    useEffect(() => {
        socket.on("log", msg => {
            setLogs(logs.concat(msg))
        })
    },[logs, socket]);

    return (
        <div className={"code scrollbar-hide w-11/12 bg-gray-700 font-mono mx-auto mt-4 h-5/6 border border-gray-600 p-4 rounded-xl h-72 overflow-y-scroll"}>
            {
                logs.reverse().map((item) => <Log key={item.substring(0,19)} description={item}/>)
            }
        </div>
    );
};

export default Logs;