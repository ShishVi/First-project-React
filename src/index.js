import React from 'react';
import state, {subscribe} from "./Redux/State";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {addPost} from "./Redux/State";
import {changeAddPostText} from "./Redux/State";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeAddPostText = {changeAddPostText}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(state);
reportWebVitals();
subscribe(rerenderEntireTree);


