import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Hero from "./components/Hero";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>, app);
