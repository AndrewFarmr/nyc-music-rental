import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
         <div class="ui-bar">
          <h1>NYC Instruments Rental </h1>
        </div>
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Search</Link> |{" "}
        <Link to="/upload_instruments">Upload New Instrument</Link> 
      </nav>
      <Outlet />
    </div>
  );
}

export default App;