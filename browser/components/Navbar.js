import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

const Navbar = () => {
  const navItems = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' }
  ]

  return (
    <AppBar 
      title='Kazue Anan'
      iconElementLeft = {
        <IconButton iconClassName="material-icons"
        containerElement={<Link to="/" />}
        ><i className="icon icon-cube"></i></IconButton>
      }
      iconElementRight ={
        <IconMenu iconButtonElement={
          <IconButton iconClassName="material-icons">
          <i className="icon ion-navicon-round"></i></IconButton>
        }>
        {
          navItems.map(nav => {
            return (
              <MenuItem
                containerElement={<Link to={ nav.path }/>}
                key={ nav.label } primaryText={ nav.label }
              />
            )
          })
        }
        </IconMenu>
      }
    />
  )

}

export default Navbar;
