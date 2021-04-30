import React from 'react';
// needs for work jsx

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
  messagesData: [
    { id: 1, message: 'Witam' },
    { id: 2, message: "Wats up!" },
    { id: 3, message: 'Iyou' },
    { id: 4, message: 'Zdaroy' },
  ],
  usersData: [
    { id: 1, name: 'Dimon', },
    { id: 2, name: 'Kate', },
    { id: 3, name: 'Den', },
    { id: 4, name: 'Victor', },
  ],
  postsData: [
    { id: 1, message: 'Hi, wat\'s up!', like: 12, },
    { id: 2, message: 'This is my first props!', like: 15, },
  ],
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
