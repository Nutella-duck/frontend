import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import { Col, Row } from "react-bootstrap";
class ProjectItemList extends Component {
  render() {
    const { projects } = this.props;
    const userNumber = [2, 3, 1];
    const runsNumber = [5, 2, 1];
    const hoursNumber = [7, 12, 1];

    const projectList = projects.map((project, index) => (
      <Col sm={4} style={{ padding: "0" }} key={index}>
        <ProjectItem
          className="col-md-4"
          description={project.description}
          name={project.projectName}
          userNumber={userNumber[index]}
          runsNumber={runsNumber[index]}
          hoursNumber={hoursNumber[index]}
        />
      </Col>
    ));

    return (
      <div>
        <Row style={{ marginLeft: "16rem", marginRight: "16rem" }}>
          {projectList}
        </Row>
      </div>
    );
  }
}

export default ProjectItemList;
