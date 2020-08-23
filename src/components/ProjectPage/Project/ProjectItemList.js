
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { Col,Row} from "react-bootstrap";
class ProjectItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.projects !== nextProps.projects;
  }
  
  render() {
    const { projects } = this.props;
    
    const projectList = projects.map(
      ({id, name},index) => (
        <Col sm= {4} style={{padding:"0"}} key={index}>
        <ProjectItem className="col-md-4" 
       
          
          key={index}
          name={name}
       
        />
        </Col>
      )
    );

    return (
      <div>
        <Row style={{marginLeft:"16rem",marginRight:"16rem" }} >
        {projectList}   
        </Row> 
      </div>
    );
  }
}

export default ProjectItemList;