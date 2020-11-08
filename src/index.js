import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, post: "Hi! How are you?", likesCount: 3},
    {id: 2, post: "It's my first post.", likesCount: 15},
    {id: 3, post: "sub pls!", likesCount: 22},
    {id: 4, post: "Mad world", likesCount: 8},
    {id: 5, post: "Hello space!", likesCount: 209}
];
let dialogs = [{id: 1, name: "Dmitry"},         // Список собеседников
    {id: 2, name: "Vlad"},
    {id: 3, name: "Kostya"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Nastya"}
];
let messages = [                                // История сообщений
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Where are you from?"},
    {id: 4, message: "How old are you?"},
    {id: 5, message: "Do you like flowers?"}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
