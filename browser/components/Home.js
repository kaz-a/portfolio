import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import store from '../store';

import Project from './Project'

const Home = props => {
  return (
    <Project />
  )
}

export default Home;