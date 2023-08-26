import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Skills} from "./Skills";
import {References} from "./References";
import {Footer} from "./Footer";
import {AboutMe} from "./AboutMe";
import {ScrollContainer, ScrollPage} from "react-scroll-motion";
import yaesol from "./yaesol.png";


function App() {
    return (<div>

        <ScrollContainer>
            <ScrollPage><AboutMe/></ScrollPage>

            <ScrollPage><Skills/></ScrollPage>

            <ScrollPage><References/></ScrollPage>

            <Footer/>
        </ScrollContainer>
    </div>);
}

export default App;
