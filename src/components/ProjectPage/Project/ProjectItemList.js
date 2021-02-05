import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { Col, Row } from 'react-bootstrap';
import './ProjectItem.css'
class ProjectItemList extends Component {
  render() {
    const { projects } = this.props;
    const userNumber = [2, 3, 1];
    const hoursNumber = [7, 12, 1];

   
    const projectList = projects.map((project, index) => (
    
        <ProjectItem
          className="col-md-4"
          key={index}
          description={project.description}
          name={project.projectName}
          userNumber={userNumber[index]}
          runsNumber={project.totalRun}
          hoursNumber={hoursNumber[index]}
          id={project.projectId}
          privacy={project.privacy}
        />
    
    ));

    return (
      <div>
        <Row className="projectList">
          {projectList}
        </Row>
      </div>
    );
  }
}

export default ProjectItemList;
