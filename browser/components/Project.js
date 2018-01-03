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
      <div style={ styles.root }>
        <GridList
          cellHeight={ 180 }
          style={ styles.gridList }
        >
          <Subheader>My projects</Subheader>
          {
            projects.map(project => (
            <GridTile
              key={ project.name }
              title={ project.name }
              subtitle={ <span>{ project.description }</span> }
              actionIcon={ <IconButton><StarBorder color="white" /></IconButton> }
            >
              <img src={ project.imageUrl } />
            </GridTile>
          ))
          }
        </GridList>
      </div>
    )
  }
  
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProjects: () => {
//       dispatch(fetchProjects())
//     }
//   }
// }

export default connect(mapStateToProps, null)(Projects)


