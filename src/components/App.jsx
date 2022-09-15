import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./app.less";
import Main from './main/main';
import Card from './card/card';
import Error from './error/error';

function App() {

    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route exact path = "/" element = { <Main /> }/>
                    <Route path = "/card/:username/:reponame" element = { <Card /> }/>
                    <Route path = "/error" element = { <Error /> }/>
                    <Route path = "*" element = { <Navigate replace to="/" /> } />
                </Routes>
            </div>   
        </BrowserRouter>
    );
}

export default App;