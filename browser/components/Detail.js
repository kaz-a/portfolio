import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../store';
import { fetchProject } from '../store/projects'

class Detail extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { projects } = this.props;
    const id = this.props.match.params.id
    const project = projects.filter(proj => {
      return proj.id === +id
    })
    console.log(project[0])

    return (
      <div className="row content">        
        {
          project.map(proj => {
            return (
              <div key={ proj.id }>
                <div className="col-xs-12 col-md-6">
                  <h1>{ proj.detail.title }</h1>
                  <h4>{ proj.detail.description }</h4>
                  <a href={ proj.detail.githubUrl }>github</a>
                  <a href={ proj.detail.publicUrl }>app</a>
                </div >

                <div className="col-xs-12 col-md-6">                  
                {
                  proj.detail.images.map(img => {
                    return (
                      <div className="card" style={{ border: '0px solid black' }} key={ img }>
                        <img className="card-img-top" style={{ width: '100%', height: 'auto', borderTopRightRadius: 0, borderTopLeftRadius: 0 }} src={ img } />
                        <p className="card-text">{ proj.detail.description }</p><br/>
                      </div>
                    )
                  })
                }
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


export default connect(mapStateToProps, null)(Detail)