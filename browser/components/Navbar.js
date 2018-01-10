import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { cyan900 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

const Navbar = () => {
  const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' }
  ]

  return (
    <AppBar 
      style={{ backgroundColor: '#fff', boxShadow: 'none' }}
      title='Kazue Anan'
      iconElementLeft = {
        <IconButton iconClassName="material-icons" 
        containerElement={<Link to="/" />} style={{ marginTop: '-8px' }}
        ><i className="fa fa-lemon-o" aria-hidden="true"></i>
        </IconButton>
      }
      iconElementRight ={
        <IconMenu iconButtonElement={
          <IconButton iconClassName="material-icons">
          <i className="fa fa-bars" aria-hidden="true"></i></IconButton>
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
