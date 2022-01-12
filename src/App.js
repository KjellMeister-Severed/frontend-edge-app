import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/general/Header";
import Logs from "./components/general/Logs";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-800 justify-between">
        <div>
            <Header/>
            <Logs/>
        </div>
        <button className={"justify-self-end mb-4 w-11/12 bg-orange-600 text-white text-2xl font-bold rounded-xl mx-auto p-4"}>Open/Close Gate</button>
    </div>
  );
}

export default App;
