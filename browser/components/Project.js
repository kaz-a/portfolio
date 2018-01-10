import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../store';
import { fetchProjects } from '../store/projects';

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
            <div className="card col-xs-12 col-sm-6 col-md-4" style={{ border: '0px solid black' }} key={ project.name } >
              <img className="card-img-top" style={{ width: '100%', height: 'auto', borderTopRightRadius: 0, borderTopLeftRadius: 0 }} src={ project.imageUrl } alt="Card image cap"/>
              <div className="card-block">
                <Link to={`/projects/${project.id}`}><h5 className="card-title">{ project.name }</h5></Link>
                <p className="card-text text-muted">{ project.description }</p>
                <br/>
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


