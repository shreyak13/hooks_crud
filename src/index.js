import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { Contactus } from './Contactus';
import { Listemployee } from './Listemployee';
import {Employeecreate} from './Employeecreate'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Employee } from './Emplyoee';
import { Employeeedit } from './employeeedit';
import {Blogdel} from './empdelete'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
    
            <Routes>
              <Route path="/" element={<App />} >
              <Route path="Home" element={<Home />} />
              <Route path="Contactus" element={<Contactus />} />
              <Route path="Listemployee" element={<Listemployee />} />
              <Route path="emp/:id" element={<Employee />} />
              <Route path="empedit/:id" element={<Employeeedit />} />
              <Route path="empdel/:id" element={<Blogdel/>} />
              <Route path="empcreate" element={<Employeecreate/>}/>
              
            </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
