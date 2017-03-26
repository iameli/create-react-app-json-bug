import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import test from "./test.json";
import DemoDependency from "demo-dependency";

console.log(test);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
