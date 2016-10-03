import React from 'react';

import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default class Home extends React.Component {
  render() {
    console.log("hello from home dot js");
    return (
      <div>
        <Hero />
        <Projects />
      </div>
    );
  }
}
