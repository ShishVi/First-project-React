import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile/*' element={<Profile state = {props.state.profilePage}/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/setting/*' element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );

}
export default App;


