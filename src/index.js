import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts =[
    {id :'1', message:'Hello! How are you? This is my first post!', likesCount:65},
    {id :'1', message:'I am a computer programmer React JS', likesCount:128},
    {id :'1', message:'I like this job', likesCount:128},
];
let dialogs =[
    {id :'1', name:'Vitaly',},
    {id :'2', name:'Sergey',},
    {id :'3', name:'Dmitry',},
    {id :'4', name:'Irina',},
    {id :'5', name:'Alexsey',},
];
let messages = [
    {id :'1', message:'Hello? My friend!',},
    {id :'2', message:'Hi! How are you?',},
    {id :'3', message:'I am Vitaly! What is your name?',},
    {id :'4', message:'Good morning!',},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
