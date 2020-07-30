
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class ProjectItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.projects !== nextProps.projects;
  }
  
  render() {
    const { projects } = this.props;
    
    const projectList = projects.map(
      ({id, name}) => (
        <ProjectItem
          
          key={id}
          name={name}
        //   users=''
        //   runs=''
        //   created=''
        //   explanation=''
        //   open=''
        />
      )
    );

    return (
      <div>
        {projectList}    
      </div>
    );
  }
}

export default ProjectItemList;