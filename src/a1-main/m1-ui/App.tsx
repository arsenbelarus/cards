import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Input} from "./common/input/Input";

const App = () => {
    return (
        <div>
            <HashRouter>
                {/*<Main/>*/}
                    <Input label={"Enter your e-mail"}/>
            </HashRouter>
        </div>
    );
}

export default App;
