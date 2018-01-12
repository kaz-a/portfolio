import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGrey900 } from 'material-ui/styles/colors';

import store from '../store';
import { fetchProjects } from '../store/projects';

import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import Detail from './Detail';
import About from './About';
import Contact from './Contact';

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchInitialData()
  }

  render(){
    const muiTheme = getMuiTheme({
      palette: {
        textColor: blueGrey900,
      },
      appBar: {
        background: 'transparent',
        textColor: blueGrey900        
      }
    })


    return(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div className="container">
          <link href="/public/css/style.css" rel="stylesheet" />
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/projects' component={ Project } />
            <Route path='/projects/:id' component={ Detail } />
            <Route exact path='/about' component={ About } />  
            <Route exact path='/contact' component={ Contact } />         
          </Switch>
        </div>

      </MuiThemeProvider>

    )
  }

}


const mapStateToProps = ({ projects }) => {
  return {
    projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialData: () => {
      dispatch(fetchProjects())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));






