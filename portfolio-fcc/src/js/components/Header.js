import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link } from "react-router";



export default () => (
  <header class="clearFix container">
        <h1>Front <br />Fun Fun</h1>
        <navigation>
            <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </navigation>
    </header>
  )
