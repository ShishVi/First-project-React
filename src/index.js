import React from 'react';
import store from "./Redux/State";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} changeAddPostText = {store.changeAddPostText.bind(store)}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());
reportWebVitals();
store.subscribe(rerenderEntireTree);


