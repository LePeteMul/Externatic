import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';


const Router = () => {
    return (
        <div>
            <Routes>
              <Route path='/' element={<NavBar/>}/>

            </Routes>
         
            
        </div>
    );
};

export default Router;