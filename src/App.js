import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/general/Header";
import Logs from "./components/general/Logs";
import {socket} from "./components/context";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-800 justify-between">
        <div>
            <Header/>
            <h1 className={"w-11/12 mx-auto mt-4 font-bold text-4xl text-gray-300"}>Logs</h1>
            <Logs/>
        </div>
        <button onClick={() => {
            console.log("sent the following message: \"This is a toggle event from the React App\"")
            socket.emit("togglegate", "\"This is a toggle event from the React App\"")
        }} className={"justify-self-end mb-4 w-11/12 bg-orange-600 text-white text-2xl font-bold rounded-xl mx-auto p-4"}>Open/Close Gate</button>
    </div>
  );
}

export default App;
