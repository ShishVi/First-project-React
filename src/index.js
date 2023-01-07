import React from 'react';
import store from "./Redux/Store-redux";
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={state} />
        </React.StrictMode>
    );
};

rerenderEntireTree(store);
store.subscribe (() => {
    rerenderEntireTree(store);
});



