import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import store from '../store';

const About = props => {
  return (
    <div className="row content">
      <div className="col-xs-12 col-md-6">
        <img src="http://via.placeholder.com/250x250"/>
      </div>
      <div className="col-xs-12 col-md-6">
        <h1>HELLO, I'M KAZ.</h1><br/>
        <p>Kaz (aka. Kazue /ka:-zə-ɛ/) is a Brooklyn-based research scientist / freelance designer-coder.<br/><br/>

        Her objective is to portray complex data in the compelling visual format. 
        Her current obsession is d3.js and python: coding + design + data is something she is madly enthusiastic about.</p> 
        <br/>
        
        <a target="_blank" title="linkedin" href="https://www.linkedin.com/in/kazanan/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>&nbsp;&nbsp;
        <a target="_blank" title="github" href="https://github.com/kaz-a"><i className="fa fa-github" aria-hidden="true"></i></a>

      </div>
    </div>
    
  )
}

export default About;