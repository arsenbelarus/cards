import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Main} from "./Main";
import {NavBar} from "./NavBar";

const App = () => {
    return (
        <div>
            <HashRouter>
              <NavBar/>
              <Main/>
            </HashRouter>
        </div>
    );
}

export default App;
