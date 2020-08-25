import React from "react";
import ReactDom from "react-dom";
import './config';

// Components
import { App } from './App'


ReactDom.render(
  <App />,
  document.getElementById('app')
)
