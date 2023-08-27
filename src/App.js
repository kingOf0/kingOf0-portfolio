import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Skills} from "./Skills";
import {References} from "./References";
import {Footer} from "./Footer";
import {AboutMe} from "./AboutMe";


function App() {
    return (<div>
        <AboutMe/>
        <Skills/>
        <References/>
        <Footer/>
    </div>);
}

export default App;
