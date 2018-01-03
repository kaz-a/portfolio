import React, { Component } from 'react';
import ReactoDOM from 'react-dom';
import { Router, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../store';
import { fetchProjects } from '../store/projects';

const Projects = props => {
  return (
    <h1>Projects</h1>
  )
}

export default Projects