import React, { Component } from 'react';
import TeamItem from './TeamItem';
import { Col, Row } from 'react-bootstrap';
import '../Run/Run.css'
class TeamItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.projects !== nextProps.projects;
  }

  render() {
    const { projects } = this.props;

    const projectList = projects.map(({ id, name }, index) => (
      
        <TeamItem key={index} id={id} name={name} />
    
    ));

    return (
      <div>
        <Row className="teamList">
          {projectList}
        </Row>
      </div>
    );
  }
}

export default TeamItemList;
