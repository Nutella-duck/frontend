
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { Conta,Col,Card,Button,Row} from "react-bootstrap";
class ProjectItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.projects !== nextProps.projects;
  }
  
  render() {
    const { projects } = this.props;
    
    
    const projectList = projects.map(
      ({id, name}) => (
        <Col sm = {4}>
        <ProjectItem
          
          key={id}
          name={name}
        //   users=''
        //   runs=''
        //   created=''
        //   explanation=''
        //   open=''
        />
        </Col>
      )
    );

    return (
      <div>
        <Row>
        {projectList}   
        </Row> 
      </div>
    );
  }
}

export default ProjectItemList;