import React from 'react';
import './App.css';
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <h1 style={{border: "4px solid green"}}>Google Clone ⚔</h1>
            {/*    Home [Full Page] */}
            <Home/>
            {/*    Search Page [The Result Page] */}
        </div>
    );
}

export default App;
