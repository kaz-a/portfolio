import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

const Contact = () => {
  return (
    <div className="content contact">
      <TextField
        hintText="name"
        floatingLabelText="Your Name"
      /><br />
      <TextField
        hintText="email"
        floatingLabelText="Your Email"
      /><br />
      <TextField
        hintText="subject"
        floatingLabelText="Message Subject"
      /><br />
      <TextField
        hintText="message"
        floatingLabelText="Your Message"
        multiLine={true}
      /><br />

      <FlatButton 
        secondary={ true }
        style={{ margin: '12' }}
        label="Get in touch!"
        icon={<i className="fa fa-paper-plane"></i>}
      />
    </div>

  )
}

export default Contact;