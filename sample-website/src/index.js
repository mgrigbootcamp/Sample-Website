import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './index.css'

import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
)