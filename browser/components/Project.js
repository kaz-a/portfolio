import React, { Component } from 'react';
import ReactoDOM from 'react-dom';
import { Router, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import store from '../store';
import { fetchProjects } from '../store/projects';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // display: 'flex',
    // flexWrap: 'nowrap',
    width: '80%',
    // height: 550,
    // overflowX: 'auto',
    overflowY: 'auto',
  },
};


class Projects extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { projects } = this.props;

    return (
      <div className="row content">
        {
          projects.map(project => {
            return (            
            <div className="card col-xs-12 col-sm-6 col-md-4 mb-4" style={{ border: '0px solid black' }} key={ project.name } >
              <img className="card-img-top" style={{ width: '100%', height: 'auto', borderTopRightRadius: 0, borderTopLeftRadius: 0 }} src={ project.imageUrl } alt="Card image cap"/>
              <div className="card-block">
                <h5 className="card-title">{ project.name }</h5>
                <p className="card-text text-muted">{ project.description }</p>
                
              </div>
            </div>
            
            )
          })
        }

      </div>
    )
  }
  
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  }
}

export default connect(mapStateToProps, null)(Projects)


