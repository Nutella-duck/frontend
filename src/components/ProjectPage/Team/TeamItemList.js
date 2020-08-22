
import React, { Component } from 'react';
import TeamItem from './TeamItem';
import { Col,Row} from "react-bootstrap";
class TeamItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.projects !== nextProps.projects;
  }
  
  render() {
    const { projects } = this.props;
    
    
    const projectList = projects.map(
      ({id, name}) => (
        <Col sm= {4} style={{padding:"0"}}>
        <TeamItem
          
          id={id}
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
        <Row  style={{marginLeft:"16rem",marginRight:"16rem"}}>
        {projectList}   
        </Row> 
      </div>
    );
  }
}

export default TeamItemList;