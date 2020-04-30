import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

// JSX 语法 <App/> 如果我们要使用自己创建的组件，组件开头必须大写

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
