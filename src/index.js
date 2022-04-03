import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UploadNewInstrument from './UploadNewInstrument';
import Search from './Search';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/search" element={<Search />} />
        <Route path="upload_instruments" element={<UploadNewInstrument />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
