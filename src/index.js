import React from 'react';
import state from "./Redux/State";
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render"

rerenderEntireTree(state);
reportWebVitals();


