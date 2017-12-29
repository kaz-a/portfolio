import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from '../store';
import { fetchWork } from '../store/work';

import Navbar from './Navbar';


class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchInitialData()
  }

  render(){
    return(
      <MuiThemeProvider>
        <div className="container">
          <link href="/public/css/style.css" rel="stylesheet" />
          <Navbar />
        </div>

      </MuiThemeProvider>

    )
  }

}


const mapStateToProps = ({ work }) => {
  return {
    work
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialData: () => {
      dispatch(fetchWork())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));






