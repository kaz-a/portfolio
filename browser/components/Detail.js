import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

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

    let imageList = []
    if(project.length >= 1){
      const proj = project[0]
      const captions = proj.detail.captions, images = proj.detail.images      
      for(let i=0; i<captions.length; i++){
          let returnObj = {}
          returnObj['image'] = images[i]
          returnObj['caption'] = captions[i]
          imageList.push(returnObj)
      }      
    }

    return (
      <div className="row content">        
        {
          project.map(proj => {
            return (
              <div key={ proj.id } className="row">
                <div className="col-xs-12 col-md-4">
                  <h1>{ proj.name }</h1>
                  <p>{ proj.detail.desc }</p>
                  <FlatButton
                    href={ proj.detail.githubUrl }
                    target="_blank"
                    label="GitHub Link"
                    default={ true }
                    icon={<i className="fa fa-github" />}
                  />
                  <FlatButton
                    href={ proj.detail.publicUrl }
                    target="_blank"
                    label="App Link"
                    default={ true }
                    icon={<i className="fa fa-android" />}
                  /><br/>
                  <FlatButton
                    href='/projects'
                    label="Back to Projects"
                    primary={ true }
                    icon={<i className="fa fa-arrow-left" />}
                  />
                </div >


                <div className="col-xs-12 col-md-8">                  
                {
                  imageList.map(img => {
                    return (
                      <div className="card" style={{ border: '0px solid black' }} key={ img.image }>
                        <img className="card-img-top" style={{ width: '100%', height: 'auto', borderTopRightRadius: 0, borderTopLeftRadius: 0 }} src={ img.image } />
                        <p className="card-text">{ img.caption }</p>
                        <br/><br/><br/><br/>
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

