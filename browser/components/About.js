import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import store from '../store';

const About = props => {
  return (
    <div className="row content">
      <div className="col-xs-12 col-md-6">
        <img src="http://via.placeholder.com/250x250"/>
      </div>
      <div className="col-xs-12 col-md-6">
        <h1>HELLO, I'M KAZ.</h1><br/>
        <p>Kaz (aka. Kazue /ka:-zə-ɛ/) is a Brooklyn-based software engineer.<br/><br/>

        She specializes in Javascript and data visualization. Her objective is to portray complex data in the compelling visual format. 
        Her current obsession is d3.js, react and python: coding + design + data is something she is madly enthusiastic about, 
        along with cooking and eating.</p> 
        <br/>
        
        <FlatButton
          href="https://www.linkedin.com/in/kazanan/"
          target="_blank"
          default={ true }
          icon={<i className="fa fa-linkedin" />}
          style={{ margin: '12' }}
        />
        <FlatButton
          href="https://github.com/kaz-a"
          target="_blank"
          default={ true }
          icon={<i className="fa fa-github" />}
          style={{ margin: '12' }}
        />
        <FlatButton
          href="https://medium.com/@zakscloset"
          target="_blank"
          default={ true }
          icon={<i className="fa fa-medium" />}
          style={{ margin: '12' }}
        />

      </div>
    </div>
    
  )
}

export default About;